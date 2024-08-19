"use client";
import React, { useState } from "react";

import { SearchBox } from "@mapbox/search-js-react";

import * as S from "./styled";
import { SearchBoxRetrieveResponse } from "@/utils/types/types";

type SearchBoxProps = {
  onSelect: (latitude: number, lonjitude: number) => void;
};

const Search: React.FC<SearchBoxProps> = ({ onSelect }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (searchString: string) => {
    setInputValue(searchString);
  };

  const handleSelect = (event: SearchBoxRetrieveResponse) => {
    const selectedResult = event.features[0];
    const coordinates = selectedResult.geometry.coordinates;
    const lonjitude = coordinates[0];
    const latitude = coordinates[1];
    const propertiesAddress = selectedResult.properties;
    handleSearch(
      `${propertiesAddress?.name} - ${propertiesAddress?.address}, ${propertiesAddress?.place_formatted}`
    );
    onSelect(latitude, lonjitude);
  };
  return (
    <S.SearchWrapper>
      <SearchBox
        accessToken={String(process.env.NEXT_PUBLIC_MAPBOX_TOKEN)}
        value={inputValue}
        onRetrieve={(value) => {
          handleSelect(value);
        }}
        placeholder="Search for a place"
      />
    </S.SearchWrapper>
  );
};

export default Search;
