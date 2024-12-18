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
import { RouteRegisterButton } from "./RouteRegisterButton";

export default function RouteManager() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Nova Rota</CardTitle>

        <RouteRegisterButton />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-20">
            <span className="text-sm text-muted-foreground">Peso</span>
            <div className="text-lg font-medium">10 kg</div>
          </div>
          <div className="flex-1">
            <Input defaultValue="Rua das Gameleiras, 443, 59141-000" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-20">
            <span className="text-sm text-muted-foreground">Tempo</span>
            <div className="text-lg font-medium">9 horas</div>
          </div>
          <div className="w-20">
            <span className="text-sm text-muted-foreground">Distância</span>
            <div className="text-lg font-medium">35 km</div>
          </div>
          <div className="flex-1">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Opção 1</SelectItem>
                <SelectItem value="option2">Opção 2</SelectItem>
                <SelectItem value="option3">Opção 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2 pt-4">
          <Button variant="outline" className="flex-1">
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
