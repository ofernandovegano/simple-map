"use client";
import * as S from "./styled";
import React, { useState } from "react";
import ReactMapGL, { ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import MarkerPin from "../MarkerPin/MarkerPin";

type MapProps = {
  initialViewState: ViewState;
  mapStyle?: string;
};

const Map: React.FC<MapProps> = ({
  initialViewState,
  mapStyle = "mapbox://styles/mapbox/streets-v11",
}) => {
  const [viewport, setViewport] = useState(initialViewState);
  const [popUpMessage, setPopUpMessage] = useState(`RepRisk Berlin is here`);

  return (
    <S.MapWrapper>
      <ReactMapGL
        {...viewport}
        mapStyle={mapStyle}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onMove={(evt) => setViewport(evt.viewState)}
      >
        <MarkerPin initialViewState={initialViewState} message={popUpMessage} />
      </ReactMapGL>
    </S.MapWrapper>
  );
};

export default Map;
