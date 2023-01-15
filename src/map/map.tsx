import { MapContainer, TileLayer } from "react-leaflet";
import { mapSettings, mapStyles } from "../constants/map-constants";
import LocationMarker from "./locationMarker";

function LeafletMap() {
  const { center, zoomLevel } = mapSettings;
  return (
    <div>
      <MapContainer
        center={center}
        zoom={zoomLevel}
        scrollWheelZoom={false}
        style={mapStyles}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
