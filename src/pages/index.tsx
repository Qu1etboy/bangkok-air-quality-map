import Map from "../components/Map";
import Layout from "../components/Layout";
import Header from "@/components/Layout/Header";
import { useAQI } from "@/hooks/useAQI";

export default function Home() {
  const stations = useAQI();

  return (
    <Layout>
      <Header stations={stations} />
      <Map stations={stations} />
    </Layout>
  );
}
