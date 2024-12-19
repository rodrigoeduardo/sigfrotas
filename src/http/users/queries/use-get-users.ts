import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../requests/get-users";
import { Position } from "@/types/user";

const useGetUsers = ({ positionFilter }: { positionFilter?: Position }) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    select: ({ data }) => {
      if (!positionFilter) return data;

      return data.filter((user) => user.cargo === positionFilter);
    },
  });
};

export default useGetUsers;
