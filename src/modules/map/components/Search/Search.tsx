"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import dynamic from "next/dynamic";

import * as S from "./styled";
import { SearchBoxRetrieveResponse } from "@/shared/types/types";
import { getCountry } from "./use-cases/getCountry";
import { Country } from "./data-access/types/getCountry";
import { SearchBoxProps } from "@mapbox/search-js-react/dist/components/SearchBox";

const SearchBox = dynamic(() =>
  import("@mapbox/search-js-react").then((mod) => mod.SearchBox as unknown as React.ComponentType<SearchBoxProps>),
  { ssr: false }
);

type SearchProps = {
  onSelect: (latitude: number, lonjitude: number) => void;
  nameParam: string | null;
};

const Search: React.FC<SearchProps> = ({ onSelect, nameParam }) => {
  const [inputValue, setInputValue] = useState(nameParam || "");
  const [countryDetails, setCountryDetails] = useState<Country>();
  const router = useRouter();

  const handleSearch = (
    searchString: string,
    latitude: number,
    longitude: number
  ) => {
    setInputValue(searchString);
    router.push(`/?lat=${latitude}&long=${longitude}&name=${searchString}`);
  };

  const handleClear = () => {
    setCountryDetails(undefined);
  };

  const handleSelect = async (event: SearchBoxRetrieveResponse) => {
    const selectedResult = event.features[0];
    const coordinates = selectedResult.geometry.coordinates;
    const lonjitude = coordinates[0];
    const latitude = coordinates[1];
    const properties = selectedResult.properties;
    const countryCode = properties?.context.country.country_code;
    const name = properties?.name ? `${properties?.name} - ` : "";
    const address = properties?.address ? `${properties?.address}, ` : "";
    const placeFormatted = properties?.place_formatted
      ? properties?.place_formatted
      : "";
    const searchString = `${name}${address}${placeFormatted}`;

    handleSearch(searchString, latitude, lonjitude);
    onSelect(latitude, lonjitude);
    const country = await getCountry(countryCode);

    if (country) {
      setCountryDetails(country);
      toast.success("Country found!");
    } else {
      toast.error("Country not found!");
    }
  };

  return (
    <S.SearchWrapper>
      <SearchBox
        accessToken={String(process.env.NEXT_PUBLIC_MAPBOX_TOKEN)}
        value={inputValue}
        onRetrieve={(value) => {
          handleSelect(value);
        }}
        onClear={handleClear}
        placeholder="Search for a place"
      />
      {countryDetails && (
        <S.CountryDetails>
          <S.Title>
            Country Details{" "}
            <S.Detail $isEmoji={true}>
              <span>{countryDetails.emoji}</span>
            </S.Detail>
          </S.Title>

          <S.Detail>{`Name: ${countryDetails.name}`}</S.Detail>
          <S.Detail>{`Capital: ${countryDetails.capital}`}</S.Detail>
          <S.Detail>{`Continent: ${countryDetails.continent.name}`}</S.Detail>
          <S.Detail>{`Currency: ${countryDetails.currency}`}</S.Detail>
          <S.Detail $lastItem={true}>
            {`Language${countryDetails.languages.length > 1 ? "s" : ""}:`}{" "}
            {countryDetails.languages.map((language) => (
              <span key={language.code}>{language.name}</span>
            ))}
          </S.Detail>
        </S.CountryDetails>
      )}
    </S.SearchWrapper>
  );
};

export default Search;
