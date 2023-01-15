import { useEffect, useState } from "react";
import { Polyline, useMap } from "react-leaflet";
import { pathOptions } from "../constants/map-constants";
import { mapData } from "../constants/map-data";
import LeafletMarker from "./marker";
import { getAllPathPosition } from "./pathPosition";
import ILocation from "../interfaces/ILocation";

export default function LocationMarker() {
  const [position, setPosition] = useState<null | ILocation>(null);
  const { hub, locations } = mapData;
  const polylineOptions = getAllPathPosition(hub, locations);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition({ lat: e.latlng.lat, lon: e.latlng.lng });
      map.setView(e.latlng, map.getZoom());
      const hubLatLon = { lat: hub.lat, lng: hub.lon };
      map.flyTo(hubLatLon, map.getZoom());
    });
  }, [map, hub]);

  return (
    <>
      {(position && (
        <LeafletMarker location={position} displayName="You are here" />
      )) ||
        null}
      <LeafletMarker location={hub} displayName="Hub" />
      {locations &&
        locations.map((location: any) => (
          <LeafletMarker
            key={`${location.address}`}
            location={location}
            displayName={`${location.address}`}
          />
        ))}
      <Polyline pathOptions={pathOptions} positions={polylineOptions} />
    </>
  );
}
