"use client";

import { useState } from "react";
import { MapPin, Plus } from "lucide-react";

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

interface RouteStop {
  type: "start" | "stop";
  order?: string;
  address: string;
}

export function RouteRegisterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [orderAddress, setOrderAddress] = useState("");
  const [stops, setStops] = useState<RouteStop[]>([
    { type: "start", address: "Transportadora AL" },
  ]);

  const handleAddStop = () => {
    if (selectedOrder && orderAddress) {
      setStops([
        ...stops,
        {
          type: "stop",
          order: selectedOrder,
          address: orderAddress,
        },
      ]);
      setSelectedOrder("");
      setOrderAddress("");
    }
  };

  const handleClear = () => {
    setStops([{ type: "start", address: "Transportadora AL" }]);
    setSelectedOrder("");
    setOrderAddress("");
  };

  const handleSubmit = () => {
    console.log("Submitting route:", stops);
    setIsOpen(false);
    handleClear();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <MapPin className="mr-2 h-4 w-4" />
          Cadastrar Rota
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            CADASTRAR ROTA
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="order">Pedido</label>
            <Select value={selectedOrder} onValueChange={setSelectedOrder}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um pedido" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="order1">Pedido #001</SelectItem>
                <SelectItem value="order2">Pedido #002</SelectItem>
                <SelectItem value="order3">Pedido #003</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="address">Endereço do pedido</label>
            <Input
              id="address"
              value={orderAddress}
              onChange={(e) => setOrderAddress(e.target.value)}
              placeholder="Digite o endereço"
            />
          </div>
          <Button
            onClick={handleAddStop}
            disabled={!selectedOrder || !orderAddress}
            className="w-full"
          >
            <Plus className="mr-2 h-4 w-4" />
            ADICIONAR
          </Button>

          <div className="mt-4 space-y-2">
            {stops.map((stop, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex-shrink-0">
                  {stop.type === "start" ? (
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  ) : (
                    <div className="h-3 w-3 rounded-full border-2 border-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">
                    {stop.type === "start" ? "Saída" : `Parada ${index}`}
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
