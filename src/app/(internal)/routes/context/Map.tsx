"use client";

import { LatLng } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface MapProps {
  markers: {
    position: LatLng;
    address: string;
  }[];
}

const MapComponent = ({ markers }: MapProps) => {
  return (
    <MapContainer
      center={[-5.839294, -35.201653]} // Default center position
      zoom={13} // Zoom level
      style={{ height: "400px", width: "100%" }}
      className="rounded-2xl z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      <Marker position={[-5.839294, -35.201653]}>
        <Popup>Transportadora AL</Popup>
      </Marker>
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.address}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

// function LocationMarker() {
//   const [position, setPosition] = useState<LatLng | null>(null);
//   const map = useMapEvents({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }

export default MapComponent;
