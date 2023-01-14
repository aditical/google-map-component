import {  Marker, Popup} from 'react-leaflet';


export default function LeafletMarker(props : { location: {lat: number, lon :number}, displayName: string }) {
    const {location, displayName} = props;
    return (
        <Marker position={{lat: location.lat, lng: location.lon}}>
            <Popup>
                {displayName}
            </Popup>
        </Marker>
    );
}