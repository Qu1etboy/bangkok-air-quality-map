import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "leaflet/dist/leaflet.css";
import StationsProvider from "@/contexts/Stations";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["thai"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StationsProvider>
      <main className={prompt.className}>
        <Component {...pageProps} />;
      </main>
    </StationsProvider>
  );
}
