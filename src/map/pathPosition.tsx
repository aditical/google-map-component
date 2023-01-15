import { getLatLongAsArrayElements } from "../constants/map-constants";
import ILocation from "../interfaces/ILocation";

export function getAllPathPosition(hub: any, locations: any) {
  const hubLatLonAsArrayElem = getLatLongAsArrayElements(hub);
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
