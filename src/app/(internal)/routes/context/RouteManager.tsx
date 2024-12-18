"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrdersButton } from "./OrdersButton";
import { Order } from "@/types/order";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

interface RouteManagerProps {
  selectedOrders: Order[];
  setSelectedOrders: Dispatch<SetStateAction<Order[]>>;
}

export default function RouteManager({
  selectedOrders,
  setSelectedOrders,
}: RouteManagerProps) {
  const [driver, setDriver] = useState("");

  function handleClear() {
    setSelectedOrders([]);
    setDriver("");
  }

  const calculatedWeight = useMemo(() => {
    return selectedOrders.reduce((acc, cur) => acc + cur.weight, 0);
  }, [selectedOrders]);

  const calculatedDuration = useMemo(() => {
    const randomValues = Array.from({ length: selectedOrders.length }).map(
      () => Math.floor(Math.random() * 4) + 1
    );

    return randomValues.reduce((acc, cur) => acc + cur, 0);
  }, [selectedOrders.length]);

  const calculatedDistance = useMemo(() => {
    const randomValues = Array.from({ length: selectedOrders.length }).map(
      () => Math.floor(Math.random() * (20 - 5 + 1)) + 5
    );

    return randomValues.reduce((acc, cur) => acc + cur, 0);
  }, [selectedOrders.length]);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Nova Rota</CardTitle>

        <OrdersButton
          selectedOrders={selectedOrders}
          setSelectedOrders={setSelectedOrders}
        />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-20">
            <span className="text-sm text-muted-foreground">Peso</span>
            <div className="text-lg font-medium">{calculatedWeight} kg</div>
          </div>
          <div className="flex-1">
            <Input
              placeholder="Última parada"
              value={selectedOrders[selectedOrders.length - 1]?.address ?? ""}
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-20">
            <span className="text-sm text-muted-foreground">Tempo</span>
            <div className="text-lg font-medium">
              {calculatedDuration} horas
            </div>
          </div>
          <div className="w-20">
            <span className="text-sm text-muted-foreground">Distância</span>
            <div className="text-lg font-medium">{calculatedDistance} km</div>
          </div>
          <div className="flex-1">
            <Select value={driver} onValueChange={(value) => setDriver(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecionar motorista" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="José">José</SelectItem>
                <SelectItem value="João">João</SelectItem>
                <SelectItem value="Jonas">Jonas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2 pt-4">
          <Button variant="outline" className="flex-1" onClick={handleClear}>
            LIMPAR
          </Button>
          <Button className="flex-1 bg-[#1B2B1B] hover:bg-[#2C3F2C]">
            CADASTRAR
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
