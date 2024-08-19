export type SelectedLocation = {
  latitude: number;
  longitude: number;
};

type Geometry = {
  coordinates: number[]
  type: string;
};

type Feature = {
  type: string;
  geometry: Geometry;
  properties: GeoJSON.GeoJsonProperties;
};

export type SearchBoxRetrieveResponse = {
  type: string;
  features: Feature[];
  attribution?: string;
  url: string;
};
