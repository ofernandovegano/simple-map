"use client";

import { Suspense } from "react";
import Mapbox from "../components/Mapbox/Mapbox";

const MapPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading map...</div>}>
      <Mapbox />
    </Suspense>
  );
};

export default MapPage;
