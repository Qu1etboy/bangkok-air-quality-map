import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "leaflet/dist/leaflet.css";
import StationsProvider from "@/contexts/Stations";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StationsProvider>
      <Component {...pageProps} />;
    </StationsProvider>
  );
}
