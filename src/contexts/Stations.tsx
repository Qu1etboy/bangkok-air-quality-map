import { useAQI } from "@/hooks/useAQI";
import { AQIIndex, TStationContext } from "@/types/aqi";
import { useContext, createContext, useState, useEffect } from "react";

const StationsContext = createContext<TStationContext | null>(null);

export const useStationsContext = () =>
  useContext(StationsContext) as TStationContext;

export default function StationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { stations, isLoading, isError } = useAQI();
  const [filteredStations, setFilteredStations] =
    useState<AQIIndex[]>(stations);
  const [selectedStation, setSelectedStation] = useState<AQIIndex | null>(null);

  // for filtering field
  const [quality, setQuality] = useState("ทั้งหมด");
  const [groupId, setGroupId] = useState("0");
  const [text, setText] = useState("");

  function handleFilterStation(filterer: (station: AQIIndex) => boolean) {
    setFilteredStations(stations.filter((station) => filterer(station)));
  }

  useEffect(() => {
    setFilteredStations(stations);
  }, [stations]);

  useEffect(() => {
    handleFilterStation(
      (station) =>
        (groupId === "0" || groupId === station.groupid) &&
        (quality === "ทั้งหมด" || quality === station.aqi_text) &&
        (text === "" ||
          station.Name.includes(text) ||
          station.District.includes(text))
    );
  }, [quality, groupId, text]);

  return (
    <StationsContext.Provider
      value={{
        stations: filteredStations,
        isLoading,
        isError,
        selectedStation,
        setSelectedStation,
        handleFilterStation,
        quality,
        groupId,
        text,
        setQuality,
        setGroupId,
        setText,
      }}
    >
      {children}
    </StationsContext.Provider>
  );
}
