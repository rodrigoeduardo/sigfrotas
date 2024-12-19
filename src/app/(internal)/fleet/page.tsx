"use client";
import useGetUsers from "@/http/users/queries/use-get-users";
import { Position } from "@/types/user";
import Image from "next/image";

export default function Fleet() {
  const { data: drivers, isLoading: isLoadingDrivers } = useGetUsers({
    positionFilter: Position.DRIVER,
  });

  return (
    <div className="flex flex-wrap">
      {isLoadingDrivers ? (
        <>Carregando...</>
      ) : (
        drivers?.map((driver) => (
          <div key={driver.id} className="p-4 w-1/4">
            <div className="flex items-center gap-4">
              <div className="w-20">
                <Image
                  src={`https://i.pravatar.cc/300?u=${driver.username}`}
                  alt={driver.pessoa.nome}
                  className="rounded-full w-20 h-20"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <h3 className="font-semibold">{driver.pessoa.nome}</h3>
                <p className="text-muted-foreground">{driver.pessoa.email}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
