import Map from "@/components/Map/Map";
import Head from "next/head";

export default function Home() {

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
        />
      </main>
    </div>
  );
}
