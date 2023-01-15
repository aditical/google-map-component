import { getLatLongAsArrayElements } from "../constants/map-constants";
import ILocation from "../interfaces/ILocation";

export function getAllPathPosition(hub: any, locations: any) {
  const hubLatLonAsArrayElem = getLatLongAsArrayElements(hub);
  /* Polyline takes the options as an array of arrays. As the line begins and ends at a hub, the remaining locations must be inserted between the same hub array in order to connect the lines.*/
  const hubArray: any[] = Array(2).fill(hubLatLonAsArrayElem);
  let locationLatLonArray: any[] = [];
  locations &&
    locations.map((location: ILocation) => {
      const locationLatLonAsArrayElem = getLatLongAsArrayElements(location);
      locationLatLonArray.push(locationLatLonAsArrayElem);
      return location;
    });
  hubArray.splice(1, 0, ...locationLatLonArray);
  return hubArray;
}
