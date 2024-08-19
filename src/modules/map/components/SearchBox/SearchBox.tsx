"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchBox } from "@mapbox/search-js-react";

import * as S from "./styled";
import { SearchBoxRetrieveResponse } from "@/shared/types/types";
import { getCountry } from "./use-cases/getCountry";

type SearchProps = {
  onSelect: (latitude: number, lonjitude: number) => void;
  nameParam: string | null;
};

const Search: React.FC<SearchProps> = ({ onSelect, nameParam }) => {
  const [inputValue, setInputValue] = useState(nameParam || "");
  const router = useRouter();

  const handleSearch = (
    searchString: string,
    latitude: number,
    longitude: number
  ) => {
    setInputValue(searchString);
    router.push(`/?lat=${latitude}&long=${longitude}&name=${searchString}`);
  };

  const handleSelect = async (event: SearchBoxRetrieveResponse) => {
    const selectedResult = event.features[0];
    const coordinates = selectedResult.geometry.coordinates;
    const lonjitude = coordinates[0];
    const latitude = coordinates[1];
    const propertiesAddress = selectedResult.properties;
    const countryCode = propertiesAddress?.context.country.country_code
    handleSearch(
      `${propertiesAddress?.name} - ${propertiesAddress?.address}, ${propertiesAddress?.place_formatted}`,
      latitude,
      lonjitude
    );
    onSelect(latitude, lonjitude);
    const country = await getCountry(countryCode)
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
