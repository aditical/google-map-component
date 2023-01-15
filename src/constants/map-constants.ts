export function getLatLongAsArrayElements(place: { lat: number; lon: number }) {
  const latLonOnArrayElem = [place.lat, place.lon];
  return latLonOnArrayElem;
}

export const pathOptions = {
  color: "red",
};