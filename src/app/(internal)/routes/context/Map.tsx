"use client";

import L, { LatLng } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import { useEffect, useMemo, useRef } from "react";

interface MapProps {
  markers: {
    position: LatLng;
    latLng: L.LatLng;
    address: string;
  }[];
}

const MapComponent = ({ markers }: MapProps) => {
  const rMachine = useRef<L.Routing.Control | null>(null);

  const waypoints = useMemo(
    () => markers.map((marker) => marker.latLng),
    [markers]
  );

  useEffect(() => {
    if (rMachine.current) {
      rMachine.current.setWaypoints(waypoints);
    }
  }, [rMachine, waypoints]);

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
          <Popup>
            {index + 1} - {marker.address}
          </Popup>
        </Marker>
      ))}
      <RoutingMachine
        ref={rMachine}
        waypoints={markers.map((marker) => marker.latLng)}
      />
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
