import { AQIIndex } from "@/types/aqi";
import axios from "axios";
import { useEffect, useState } from "react";

export function useAQI() {
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

  return stations;
}
