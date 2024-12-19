"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Package, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Order } from "@/types/order";

const ORDERS_MOCK: Order[] = [
  // {
  //   id: 1,
  //   address:
  //     "Rua dos Ipês, 123, Capim Macio, 59082-500, Natal, Rio Grande do Norte",
  //   weight: 4,
  // },
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
  // {
  //   id: 5,
  //   address:
  //     "Rua Trairi, 202, Petrópolis, 59014-300, Natal, Rio Grande do Norte",
  //   weight: 1,
  // },
  // {
  //   id: 6,
  //   address:
  //     "Avenida Hermes da Fonseca, 303, Alecrim, 59030-500, Natal, Rio Grande do Norte",
  //   weight: 10,
  // },
  {
    id: 7,
    address:
      "Rua São José, 404, Cidade Alta, 59025-000, Natal, Rio Grande do Norte",
    weight: 5,
  },
  // {
  //   id: 8,
  //   address:
  //     "Avenida Presidente Bandeira, 505, Rocas, 59010-030, Natal, Rio Grande do Norte",
  //   weight: 3,
  // },
  // {
  //   id: 9,
  //   address:
  //     "Rua Coronel Estevam, 606, Quintas, 59035-000, Natal, Rio Grande do Norte",
  //   weight: 9,
  // },
  // {
  //   id: 10,
  //   address:
  //     "Avenida Senador Salgado Filho, 707, Lagoa Seca, 59078-000, Natal, Rio Grande do Norte",
  //   weight: 6,
  // },
];

interface OrdersButtonProps {
  selectedOrders: Order[];
  setSelectedOrders: Dispatch<SetStateAction<Order[]>>;
}

export function OrdersButton({
  selectedOrders,
  setSelectedOrders,
}: OrdersButtonProps) {
  const orders = ORDERS_MOCK;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  const handleAddStop = () => {
    if (selectedOrder) {
      setSelectedOrders([...selectedOrders, selectedOrder]);
      setSelectedOrder(undefined);
    }
  };

  const handleClear = () => {
    setSelectedOrders([]);
    setSelectedOrder(undefined);
  };

  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#1B2B1B]">
          <Package className="mr-2 h-4 w-4" />
          Entregas
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            CADASTRAR ENTREGAS
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="order">Pedido</label>
            <Select
              value={selectedOrder?.id.toString()}
              onValueChange={(value) =>
                setSelectedOrder(
                  orders.find((order) => order.id.toString() === value) ??
                    undefined
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione um pedido" />
              </SelectTrigger>
              <SelectContent>
                {orders.map((order) => (
                  <SelectItem
                    key={order.id}
                    value={order.id.toString()}
                    disabled={selectedOrders.some(
                      (selectedOrder) => selectedOrder.id === order.id
                    )}
                  >
                    Pedido #{order.id.toString().padStart(3, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="address">Endereço do pedido</label>
            <Input
              id="address"
              value={selectedOrder?.address ?? ""}
              placeholder="Endereço"
              readOnly
            />
          </div>
          <Button
            onClick={handleAddStop}
            disabled={!selectedOrder}
            className="w-full"
          >
            <Plus className="mr-2 h-4 w-4" />
            ADICIONAR
          </Button>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Saída</div>
                <div className="text-sm text-muted-foreground">
                  Transportadora AL
                </div>
              </div>
            </div>
            {selectedOrders.map((stop, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex-shrink-0">
                  <div className="h-3 w-3 rounded-full border-2 border-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">
                    {`Parada ${index + 1}`}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stop.address}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleClear} className="flex-1">
            LIMPAR
          </Button>
          <Button onClick={handleSubmit} className="flex-1">
            CADASTRAR
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
