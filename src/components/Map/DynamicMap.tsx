import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { TStationContext } from "@/types/aqi";
import { getIcon } from "./Icons";
import { getColor } from "@/services/aqi";
import { formatDate } from "@/services/date";
import { useStationsContext } from "@/contexts/Stations";
import { useEffect } from "react";

export default function Map() {
  const { stations } = useStationsContext() as TStationContext;

  return (
    <MapContainer
      className="fixed h-full w-full"
      center={[13.736717, 100.523186]}
      zoom={13}
      zoomControl={true}
      scrollWheelZoom={true}
    >
      <ZoomTo />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <>
        {stations.map(
          (station) =>
            parseFloat(station.Latitude) &&
            parseFloat(station.Longitude) && (
              <Marker
                key={crypto.randomUUID()}
                position={[
                  parseFloat(station.Latitude),
                  parseFloat(station.Longitude),
                ]}
                icon={getIcon(station.aqi_text)}
              >
                <Popup>
                  <h2 className="mb-3 text-xl font-bold">{station.District}</h2>
                  <h3 className="text-neutral-500">{station.Name}</h3>
                  <img
                    width={100}
                    className="mx-auto my-3"
                    src={`https://bangkokairquality.com/bma/${station.aqi_img}`}
                  />
                  <p className="text-xl font-bold">
                    PM<sub>2.5</sub> :{" "}
                    <span className={getColor(station.aqi_text)}>
                      {station.PM25}
                    </span>{" "}
                    ug/m3
                  </p>
                  <p className="text-md font-bold">{station.aqi_text}</p>
                  <p>{formatDate(station.Date_Time)}</p>
                </Popup>
              </Marker>
            )
        )}
      </>
    </MapContainer>
  );
}

function ZoomTo() {
  const map = useMap();
  const { selectedStation } = useStationsContext() as TStationContext;

  useEffect(() => {
    if (!selectedStation) return;

    const lat = parseFloat(selectedStation.Latitude);
    const lon = parseFloat(selectedStation.Longitude);

    if (!lat || !lon) return;
    map.flyTo(
      [lat, lon],
      15 // number of zoom
    );
  }, [selectedStation]);

  return null;
}
