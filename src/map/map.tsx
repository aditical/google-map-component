import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./locationMarker";

function LeafletMap() {
  return (
    <div>
      <MapContainer
        center={[49.1951, 16.6068]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
