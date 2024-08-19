"use client";
import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL from "react-map-gl";

import Search from "../SearchBox/SearchBox";
import MarkerPin from "../MarkerPin/MarkerPin";

import { SelectedLocation } from "@/utils/types/types";

import * as S from "./styled";

type MapProps = {
  mapStyle?: string;
};

const Map: React.FC<MapProps> = ({
  mapStyle = "mapbox://styles/mapbox/streets-v11",
}) => {
  const initialViewDefault = {
    latitude: 52.5001218829824,
    longitude: 13.420673166765605,
    zoom: 16,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
  };
  const [viewState, setViewState] = useState(initialViewDefault);
  const [popUpMessage, setPopUpMessage] = useState(`RepRisk Berlin is here!`);
  const [pinLocation, setPinLocation] = useState<SelectedLocation | null>({
    latitude: initialViewDefault.latitude,
    longitude: initialViewDefault.longitude,
  });

  const handleSelectLocation = (latitude: number, longitude: number) => {
    setPopUpMessage("It is here!");
    setViewState({
      ...viewState,
      latitude,
      longitude,
      zoom: 15,
    });
    setPinLocation({ latitude, longitude });
  };

  return (
    <S.MapWrapper>
      <ReactMapGL
        {...viewState}
        mapStyle={mapStyle}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onMove={(evt) => setViewState(evt.viewState)}
      >
        <MarkerPin
          pinLocation={pinLocation}
          onClickMap={() => setPinLocation(null)}
          message={popUpMessage}
        />
        <Search onSelect={handleSelectLocation} />
      </ReactMapGL>
    </S.MapWrapper>
  );
};

export default Map;
