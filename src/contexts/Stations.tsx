import { useAQI } from "@/hooks/useAQI";
import { AQIIndex, TStationContext } from "@/types/aqi";
import { useContext, createContext, useState } from "react";

const StationsContext = createContext<TStationContext | null>(null);

export const useStationsContext = () => useContext(StationsContext);

export default function StationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const stations = useAQI();
  const [selectedStation, setSelectedStation] = useState<AQIIndex | null>(null);

  return (
    <StationsContext.Provider
      value={{ stations, selectedStation, setSelectedStation }}
    >
      {children}
    </StationsContext.Provider>
  );
}
