import { useQueries } from "@tanstack/react-query";
import { getLatLng } from "../requests/getLatLng";

export const useGetMultipleLatLng = (addresses: string[]) => {
  return useQueries({
    queries: addresses.map((address) => ({
      queryKey: ["latlng", address],
      queryFn: () => getLatLng(address),
    })),
  });
};
