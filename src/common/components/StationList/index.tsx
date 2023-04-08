import { useStationsContext } from "@/common/contexts/Stations";
import Loading from "../Loading";
import Error from "../Error";
import Station from "./components/Station";

export default function StationsList() {
  const { stations, isLoading, isError } = useStationsContext();

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
        <Station station={station} />
      ))}
    </>
  );
}
