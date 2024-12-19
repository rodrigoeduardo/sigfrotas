"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import useGetUsers from "@/http/users/queries/use-get-users";
import { Position } from "@/types/user";
import { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

export default function FleetMetrics() {
  const { data: drivers } = useGetUsers({
    positionFilter: Position.DRIVER,
  });

  const data = useMemo(
    () => [
      { name: "Indisponível", value: 0, color: "#FF4B55" },
      {
        name: "Disponível",
        value: (drivers?.length ?? 0) - 2,
        color: "#0A2472",
      },
      { name: "Em rota de entrega", value: 2, color: "#4B79F3" },
    ],
    [drivers?.length]
  );

  const totalFleet = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Informações da Frota</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <h3>
          <b>{totalFleet}</b> Total Caminhões
        </h3>
        <ChartContainer
          config={{
            indisponivel: {
              label: "Indisponível",
              color: "hsl(355, 100%, 64%)",
            },
            disponivel: {
              label: "Disponível",
              color: "hsl(220, 85%, 24%)",
            },
            emRota: {
              label: "Em rota de entrega",
              color: "hsl(225, 88%, 62%)",
            },
          }}
          className="w-full h-full max-h-[200px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={0}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
