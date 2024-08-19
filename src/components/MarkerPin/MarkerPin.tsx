"use client";
import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Popup, Marker } from "react-map-gl";

import { SelectedLocation } from "@/utils/types/types";

import { MapPin } from "lucide-react";
import * as S from "./styled";

type MarkerPinProps = {
  pinLocation: SelectedLocation | null;
  message: string;
  onClickMap: () => void;
};

const MarkerPin: React.FC<MarkerPinProps> = ({
  pinLocation,
  onClickMap,
  message,
}) => {
  const handleClosePopUp = () => {
    onClickMap();
  };

  return (
    <>
      {pinLocation && (
        <>
          <Marker
            latitude={pinLocation.latitude}
            longitude={pinLocation.longitude}
          >
            <S.IconWrapper>
              <MapPin />
            </S.IconWrapper>
          </Marker>

          <Popup
            latitude={pinLocation.latitude}
            longitude={pinLocation.longitude}
            closeButton={false}
            closeOnClick={true}
            onClose={handleClosePopUp}
            anchor="top"
            offset={[0, 15] as [number, number]}
          >
            <div>{message}</div>
          </Popup>
        </>
      )}
    </>
  );
};

export default MarkerPin;
