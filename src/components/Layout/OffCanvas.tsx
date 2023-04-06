import { useStationsContext } from "@/contexts/Stations";
import { getColor } from "@/services/aqi";
import { formatDate } from "@/services/date";
import { AQIIndex, TStationContext } from "@/types/aqi";
import { useState } from "react";

export default function OffCanvas() {
  const [isOpen, setOpen] = useState(false);
  const { stations, setSelectedStation } =
    useStationsContext() as TStationContext;

  function handleSelected(station: AQIIndex) {
    setSelectedStation(station);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          className="fill-black"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="fixed left-0 top-0 flex h-screen w-96 flex-col bg-white">
          <div className="w-full px-3 py-2">
            <button className="right-0 m-3" onClick={() => setOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
              >
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto">
            <h2 className="mx-3 text-3xl font-bold text-green-800">
              รายงานสถานการณ์
            </h2>
            <h2 className="mx-3 mb-5 text-3xl text-green-700">คุณภาพอากาศ</h2>
            {stations.map((station) => (
              <button
                key={crypto.randomUUID()}
                className="flex w-full gap-5 border-b px-3 py-5 text-sm"
                onClick={() => handleSelected(station)}
              >
                <div className="max-w-[100px]">
                  <img
                    src={`https://bangkokairquality.com/bma/${station.aqi_img}`}
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
                    <span className={getColor(station.aqi_text)}>
                      {station.PM25}
                    </span>{" "}
                    ug/m3
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
