"use client";

import { useSearchParams } from "next/navigation";
import { LatLng } from "leaflet";
import MapComponent from "@/app/(internal)/routes/context/Map";

export default function MapaPage() {
  const searchParams = useSearchParams();

  const lat = parseFloat(searchParams.get("lat") || "0");
  const lng = parseFloat(searchParams.get("lng") || "0");

  const markers = [
    {
      position: new LatLng(lat, lng),
      latLng: new LatLng(lat, lng),
      address: `Pedido selecionado`,
    },
  ];

  return (
    <div className="p-4">
      <MapComponent markers={markers} />
    </div>
  );
}
