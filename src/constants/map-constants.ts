import ILocation from "../interfaces/ILocation";
import IMapSettings from "../interfaces/IMapSettings";

export function getLatLongAsArrayElements(place: ILocation) {
  const latLonOnArrayElem = [place.lat, place.lon];
  return latLonOnArrayElem;
}

export const pathOptions = {
  color: "red",
};

export const mapSettings: IMapSettings = {
  center: [49.1951, 16.6068],
  zoomLevel: 10,
};
