import ILocation from "../interfaces/ILocation";
import IMapSettings from "../interfaces/IMapSettings";
import IMapStyles from "../interfaces/IMapStyles";

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

export const mapStyles: IMapStyles = {
  height: "100vh",
};
