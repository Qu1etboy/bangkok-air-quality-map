import { useStationsContext } from "@/common/contexts/Stations";
import { AQIIndex } from "@/common/types/aqi";
import { getColor } from "@/common/utils/aqi";
import { formatDate } from "@/common/utils/date";

export default function Station({ station }: { station: AQIIndex }) {
  const { setSelectedStation } = useStationsContext();

  function handleSelected(station: AQIIndex) {
    setSelectedStation(station);
  }

  return (
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
  );
}
