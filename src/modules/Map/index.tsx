import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./components/DynamicMap"), {
  ssr: false,
});

export default function Map() {
  return <DynamicMap />;
}
