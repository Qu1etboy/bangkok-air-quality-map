import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import { useEffect, useState } from "react";

const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconAnchor: [17, 46],
});

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const yellowIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const orangeIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface AQIIndex {
  Name: string;
  district_name: string;
  Code: string;
  ThaiName: string;
  EngName: string;
  ThaiShortName: string;
  Latitude: string;
  Longitude: string;
  Addr: string;
  District: string;
  District_en: string;
  Province: string;
  LastData: string;
  ThaiCode: string;
  groupname: string;
  groupname_en: string;
  status: string;
  Date_Time: string;
  PM10quality: number;
  PM10: number;
  PM25quality: number;
  PM25: number;
  COquality: number;
  CO: number;
  NO2quality: number;
  NO2: number;
  max_aqi: number;
  aqi_img: string;
  aqi_text: string;
}

export default function Map() {
  const [stations, setStations] = useState<AQIIndex[]>([]);

  useEffect(() => {
    async function getData() {
      const results = await Promise.all(
        [0, 30, 59].map(async (nextPage) => {
          const res = await axios.post(
            "https://bangkokairquality.com/bma/Home/getDataHome",
            `lang=th&next_load=${nextPage}&group_district=0`,
            {
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
              },
            }
          );
          const data: { arrStation: AQIIndex[] } = await res.data;

          return data.arrStation;
        })
      );
      console.log(results[2]);
      setStations([...results[0], ...results[1], ...results[2]]);
    }

    getData();
  }, []);

  useEffect(() => {
    console.log(stations);
  }, [stations]);

  function getColor(text: string) {
    switch (text) {
      case "คุณภาพดี":
        return "text-green-500";
      case "ปานกลาง":
        return "text-yellow-500";
      case "เริ่มมีผลกระทบต่อสุขภาพ":
        return "text-orange-500";
      case "มีผลกระทบต่อสุขภาพ":
        return "text-red-500";
      default:
        return "";
    }
  }

  function getIcon(text: string) {
    switch (text) {
      case "คุณภาพดี":
        return greenIcon;
      case "ปานกลาง":
        return yellowIcon;
      case "เริ่มมีผลกระทบต่อสุขภาพ":
        return orangeIcon;
      case "มีผลกระทบต่อสุขภาพ":
        return redIcon;
      default:
        return icon;
    }
  }

  function formatDate(date: string) {
    return new Intl.DateTimeFormat("th", {
      dateStyle: "medium",
      timeStyle: "medium",
    }).format(new Date(date));
  }

  return (
    <MapContainer
      className="h-full w-full"
      center={[13.736717, 100.523186]}
      zoom={13}
      scrollWheelZoom={true}
    >
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
