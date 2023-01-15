import { Marker, Popup } from "react-leaflet";
import ILocation from "../interfaces/ILocation";

export default function LeafletMarker(props: {
  location: ILocation;
  displayName: string;
}) {
  const { location, displayName } = props;
  return (
    <Marker
      position={{ lat: location.lat, lng: location.lon }}
      eventHandlers={{
        mouseover: (event) => event.target.openPopup(),
      }}
    >
      <Popup>{displayName}</Popup>
    </Marker>
  );
}
