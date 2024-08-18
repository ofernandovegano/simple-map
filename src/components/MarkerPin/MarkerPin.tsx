"use client";
import * as S from "./styled";
import React, { useState } from "react";
import { ViewState, Popup, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";

type MarkerPinProps = {
  initialViewState: ViewState;
  message: string;
};

type selectedLocation = {
  latitude: number;
  longitude: number;
};

const MarkerPin: React.FC<MarkerPinProps> = ({ initialViewState, message }) => {
  const [selectedLocation, setSelectedLocation] =
    useState<selectedLocation | null>({
      latitude: initialViewState.latitude,
      longitude: initialViewState.longitude,
    });

  const handleClosePopUp = () => {
    setSelectedLocation(null);
  };

  return (
    <>
      <Marker
        latitude={initialViewState.latitude}
        longitude={initialViewState.longitude}
      >
        <S.IconWrapper>
          <MapPin />
        </S.IconWrapper>
      </Marker>

      {selectedLocation && (
        <Popup
          latitude={selectedLocation.latitude}
          longitude={selectedLocation.longitude}
          closeButton={false}
          closeOnClick={true}
          onClose={handleClosePopUp}
          anchor="top"
          offset={[0, 15] as [number, number]}
        >
          <div>{message}</div>
        </Popup>
      )}
    </>
  );
};

export default MarkerPin;
