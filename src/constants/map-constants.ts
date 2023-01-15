import ILocation from "../interfaces/ILocation";

export function getLatLongAsArrayElements(place: ILocation) {
  const latLonOnArrayElem = [place.lat, place.lon];
  return latLonOnArrayElem;
}

export const pathOptions = {
  color: "red",
};

export const mapSettings: { center: [number, number]; zoomLevel: number } = {
  center: [49.1951, 16.6068],
  zoomLevel: 10,
};
