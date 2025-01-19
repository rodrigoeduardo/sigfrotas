"use client";

import { useRouter } from "next/navigation";

type Pedido = {
  id: number;
  cliente: string;
  status: "Pendente" | "Em trânsito" | "Entregue";
  coordenadas: { lat: number; lng: number };
};

export default function PedidosPage() {
  const router = useRouter();

  // Lista de pedidos mockados com coordenadas
  const pedidos: Pedido[] = [
    {
      id: 1,
      cliente: "João Silva",
      status: "Pendente",
      coordenadas: { lat: -5.84, lng: -35.21 },
    },
    {
      id: 2,
      cliente: "Maria Souza",
      status: "Em trânsito",
      coordenadas: { lat: -5.841, lng: -35.215 },
    },
    {
      id: 3,
      cliente: "Carlos Alberto",
      status: "Entregue",
      coordenadas: { lat: -5.842, lng: -35.22 },
    },
    {
      id: 4,
      cliente: "Ana Paula",
      status: "Pendente",
      coordenadas: { lat: -5.843, lng: -35.225 },
    },
  ];

  // Função para redirecionar para a página de mapa
  const handlePedidoClick = (pedido: Pedido) => {
    router.push(
      `/map/${pedido.id}?lat=${pedido.coordenadas.lat}&lng=${pedido.coordenadas.lng}`
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Pedidos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pedidos.map((pedido) => (
          <div
            key={pedido.id}
            className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
            onClick={() => handlePedidoClick(pedido)}
          >
            <h2 className="font-semibold text-lg">Pedido #{pedido.id}</h2>
            <p className="text-sm text-gray-700">Cliente: {pedido.cliente}</p>
            <p
              className={`text-sm mt-2 ${
                pedido.status === "Pendente"
                  ? "text-yellow-500"
                  : pedido.status === "Em trânsito"
                  ? "text-blue-500"
                  : "text-green-500"
              }`}
            >
              Status: {pedido.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
