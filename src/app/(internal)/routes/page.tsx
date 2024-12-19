"use client";
import { VehicleTracker } from "./context/VehicleTracker";
import RouteManager from "./context/RouteManager";
import FleetMetrics from "./context/FleetMetrics";
import { Order } from "@/types/order";
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useGetMultipleLatLng } from "@/http/geocode/queries/useGetMultipleLatLng";
import L, { LatLng } from "leaflet";

const MapComponent = dynamic(() => import("./context/Map"), { ssr: false });

export default function Routes() {
  const [readyItems, setReadyItems] = useState<{ id: number }[]>([]);
  const [selectedOrders, setSelectedOrders] = useState<Order[]>([]);

  const positionsRes = useGetMultipleLatLng(
    selectedOrders.map((order) => order.address)
  );

  const markers = useMemo(() => {
    return positionsRes.map((position, index) => {
      const geometry = position.data?.results[0].geometry;

      return {
        position: new LatLng(
          +(geometry?.lat.toFixed(3) ?? 0),
          +(geometry?.lng.toFixed(3) ?? 0)
        ),
        latLng: L.latLng(geometry?.lat ?? 0, geometry?.lng ?? 0),
        address: selectedOrders[index].address,
      };
    });
  }, [positionsRes, selectedOrders]);

  return (
    <div className="grid grid-cols-[1fr,_2fr] gap-4">
      <VehicleTracker readyItems={readyItems} />

      <div className="flex flex-col gap-4">
        <MapComponent
          markers={[
            {
              latLng: L.latLng(-5.839294, -35.201653),
              address: "Transportadora AL",
              position: L.latLng(-5.839294, -35.201653),
            },
            ...markers,
          ]}
        />
        <div className="grid grid-cols-2 gap-4">
          <RouteManager
            readyItems={readyItems}
            setReadyItems={setReadyItems}
            selectedOrders={selectedOrders}
            setSelectedOrders={setSelectedOrders}
          />

          <FleetMetrics />
        </div>
      </div>
    </div>
  );
}
