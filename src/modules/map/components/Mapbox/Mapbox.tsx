"use client";
import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL from "react-map-gl";

import Search from "../SearchBox/SearchBox";
import MarkerPin from "../MarkerPin/MarkerPin";

import { useSearchParams } from "next/navigation";

import * as S from "./styled";
import { SelectedLocation } from "@/shared/types/types";

type MapboxProps = {
  mapStyle?: string;
};

const Mapbox: React.FC<MapboxProps> = ({
  mapStyle = "mapbox://styles/mapbox/streets-v11",
}) => {
  const searchParams = useSearchParams();
  const latParam = searchParams.get("lat");
  const longParam = searchParams.get("long");
  const nameParam = searchParams.get("name");
  const initialViewDefault = {
    latitude: 52.5001218829824,
    longitude: 13.420673166765605,
    zoom: 16,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
  };

  if (latParam !== null && longParam !== null) {
    initialViewDefault.latitude = Number(latParam);
    initialViewDefault.longitude = Number(longParam);
  }

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
    <S.MapboxWrapper>
      <ReactMapGL
        {...viewState}
        mapStyle={mapStyle}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onMove={(evt) => setViewState(evt.viewState)}
      >
        <MarkerPin pinLocation={pinLocation} message={popUpMessage} />
        <Search onSelect={handleSelectLocation} nameParam={nameParam} />
      </ReactMapGL>
    </S.MapboxWrapper>
  );
};

export default Mapbox;
