import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import 'leaflet/dist/leaflet.css';

export default function MapWithLocation() {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: '200px', width: '50%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}
