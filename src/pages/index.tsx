import Head from "next/head";
import { Inter } from "next/font/google";
import Map from "../components/Map";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PM 2.5 Tracker</title>
        <meta name="description" content="PM 2.5 tracker map" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-full">
        <Map />
      </main>
    </>
  );
}
