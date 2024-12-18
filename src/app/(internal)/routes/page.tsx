"use client";
import { VehicleTracker } from "./context/VehicleTracker";
import RouteManager from "./context/RouteManager";
import FleetMetrics from "./context/FleetMetrics";
import { Order } from "@/types/order";
import { useState } from "react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./context/Map"), { ssr: false });

export const ORDERS_MOCK: Order[] = [
  {
    id: 1,
    address:
      "Rua dos Ipês, 123, Capim Macio, 59082-500, Natal, Rio Grande do Norte",
    weight: 4,
  },
  {
    id: 2,
    address:
      "Avenida Engenheiro Roberto Freire, 456, Ponta Negra, 59090-000, Natal, Rio Grande do Norte",
    weight: 8,
  },
  {
    id: 3,
    address:
      "Rua das Palmeiras, 789, Tirol, 59020-350, Natal, Rio Grande do Norte",
    weight: 2,
  },
  {
    id: 4,
    address:
      "Avenida Prudente de Morais, 101, Lagoa Nova, 59056-000, Natal, Rio Grande do Norte",
    weight: 7,
  },
  {
    id: 5,
    address:
      "Rua Trairi, 202, Petrópolis, 59014-300, Natal, Rio Grande do Norte",
    weight: 1,
  },
  {
    id: 6,
    address:
      "Avenida Hermes da Fonseca, 303, Alecrim, 59030-500, Natal, Rio Grande do Norte",
    weight: 10,
  },
  {
    id: 7,
    address:
      "Rua São José, 404, Cidade Alta, 59025-000, Natal, Rio Grande do Norte",
    weight: 5,
  },
  {
    id: 8,
    address:
      "Avenida Presidente Bandeira, 505, Rocas, 59010-030, Natal, Rio Grande do Norte",
    weight: 3,
  },
  {
    id: 9,
    address:
      "Rua Coronel Estevam, 606, Quintas, 59035-000, Natal, Rio Grande do Norte",
    weight: 9,
  },
  {
    id: 10,
    address:
      "Avenida Senador Salgado Filho, 707, Lagoa Seca, 59078-000, Natal, Rio Grande do Norte",
    weight: 6,
  },
];

export default function Routes() {
  const [selectedOrders, setSelectedOrders] = useState<Order[]>([]);

  return (
    <div className="grid grid-cols-[1fr,_2fr] gap-4">
      <VehicleTracker />

      <div className="flex flex-col gap-4">
        <MapComponent />
        <div className="grid grid-cols-2 gap-4">
          <RouteManager
            selectedOrders={selectedOrders}
            setSelectedOrders={setSelectedOrders}
          />

          <FleetMetrics />
        </div>
      </div>
    </div>
  );
}
