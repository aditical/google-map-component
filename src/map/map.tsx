import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { mapData } from "../constants/map-data";
import LeafletMarker from "./markers";
import { getAllPathPosition } from "./pathPosition";

const redOptions = { color: "red" };

function LeafletMap() {
  const { hub, locations } = mapData;

  const polylineOptions = getAllPathPosition(hub, locations);

  return (
    <div className="App">
      <MapContainer
        center={{ lat: hub.lat, lng: hub.lon }}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LeafletMarker location={hub} displayName="Hub" />
        {locations &&
          locations.map((location: any) => (
            <LeafletMarker
              location={location}
              displayName={`${location.address}`}
            />
          ))}
        <Polyline pathOptions={redOptions} positions={polylineOptions} />
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
