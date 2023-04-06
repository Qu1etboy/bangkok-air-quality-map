import { AQIIndex } from "@/types/aqi";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});

export default function Map(props: { stations: AQIIndex[] }) {
  return <DynamicMap {...props} />;
}
