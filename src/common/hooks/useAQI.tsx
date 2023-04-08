import { AQIIndex } from "@/common/types/aqi";
import axios from "axios";
import { useEffect, useState } from "react";

export function useAQI() {
  const [stations, setStations] = useState<AQIIndex[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      const results = await Promise.all(
        [0, 30, 59].map(async (nextPage) => {
          try {
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
          } catch (err) {
            setLoading(false);
            setError(true);
            throw new Error("There was an error. Please try again");
          }
        })
      );

      setStations([...results[0], ...results[1], ...results[2]]);
      setLoading(false);
    }

    getData();
  }, []);

  return { stations, isLoading, isError };
}
