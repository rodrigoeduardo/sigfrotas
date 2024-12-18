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
import { ORDERS_MOCK } from "../page";

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
