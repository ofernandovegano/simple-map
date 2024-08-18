import Map from "@/components/Map/Map";
import Head from "next/head";

export default function Home() {
  const initialViewState = {
    latitude: 52.5001218829824,
    longitude: 13.420673166765605,
    zoom: 16,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
  }

  return (
    <div>
      <Head>
        <title>Mapbox with Next.js and TypeScript</title>
        <meta
          name="description"
          content="Integrating Mapbox with Next.js and TypeScript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Map
          initialViewState={initialViewState}
        />
      </main>
    </div>
  );
}
