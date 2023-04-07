import { useStationsContext } from "@/contexts/Stations";
import { AQIIndex, TStationContext } from "@/types/aqi";
import Loading from "./Loading";
import Error from "./Error";
import { formatDate } from "@/services/date";
import { getColor } from "@/services/aqi";

export default function StationsList() {
  const { stations, isLoading, isError, setSelectedStation } =
    useStationsContext() as TStationContext;

  function handleSelected(station: AQIIndex) {
    setSelectedStation(station);
  }

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  if (stations.length === 0)
    return (
      <div className="w-full pt-16 text-center">
        <p>ไม่พบสถานี</p>
      </div>
    );

  return (
    <>
      {stations.map((station) => (
        <button
          key={crypto.randomUUID()}
          className="flex w-full gap-5 border-b px-3 py-5 text-sm"
          onClick={() => handleSelected(station)}
        >
          <div className="min-w-[100px] max-w-[100px]">
            <img
              src={`https://bangkokairquality.com/bma/${station.aqi_img}`}
              className="w-full"
              alt={station.aqi_text}
            />
            <p className="text-center font-bold">{station.aqi_text}</p>
          </div>
          <div className="text-left">
            <h3 className="font-bold">{station.District}</h3>
            <h4 className="text-neutral-500">{station.Name}</h4>
            <p>{formatDate(station.Date_Time)}</p>
            <p className="mt-5 font-bold">
              PM<sub>2.5</sub> :{" "}
              <span className={getColor(station.aqi_text)}>{station.PM25}</span>{" "}
              ug/m3
            </p>
          </div>
        </button>
      ))}
    </>
  );
}
