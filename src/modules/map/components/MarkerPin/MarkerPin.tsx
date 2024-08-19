"use client";
import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Popup, Marker } from "react-map-gl";


import { MapPin } from "lucide-react";
import * as S from "./styled";
import { SelectedLocation } from "@/shared/types/types";

type MarkerPinProps = {
  pinLocation: SelectedLocation | null;
  message: string;
};

const MarkerPin: React.FC<MarkerPinProps> = ({
  pinLocation,
  message,
}) => {

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
