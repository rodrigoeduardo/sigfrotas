import { Search, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function VehicleTracker() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Entregas</h1>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Pesquisar" className="pl-8" />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="enroute" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ready">Pronto</TabsTrigger>
          <TabsTrigger value="enroute">A caminho</TabsTrigger>
          <TabsTrigger value="delivered">Entregue</TabsTrigger>
        </TabsList>
        <TabsContent value="ready" className="mt-4 space-y-4"></TabsContent>
        <TabsContent value="enroute" className="mt-4 space-y-4">
          {/* Vehicle Items */}
          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Truck className="h-5 w-5 text-blue-500" />
                </div>
                <div className="space-y-1">
                  <div className="font-medium">EShipGO123</div>
                  <div className="text-sm text-yellow-600">A caminho</div>
                  <div className="text-xs text-muted-foreground">
                    Mai, 04 8:15 PM
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Rastrear
              </Button>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="delivered" className="mt-4 space-y-4" />
      </Tabs>
    </div>
  );
}
