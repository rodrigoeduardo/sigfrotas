import { UserLogged } from "@/types/user";
import { jwtDecodeUtil } from "@/utils/jwt.utils";
import { StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// import { queryClient } from "@/lib/react-query";

type State = {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  userLogged: UserLogged | null;
};

type Actions = {
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
};

export type AuthSlice = State & Actions;

const initialState: State = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  userLogged: null,
};

const createAuthSlice: StateCreator<AuthSlice> = (set) => {
  return {
    ...initialState,
    login: (accessToken: string, refreshToken: string) => {
      const decoded = jwtDecodeUtil(accessToken);

      set({
        isAuthenticated: true,
        accessToken: accessToken,
        refreshToken: refreshToken,
        userLogged: decoded,
      });
    },
    logout: () => {
      // queryClient.clear();
      set({
        isAuthenticated: false,
        accessToken: null,
        userLogged: null,
        refreshToken: null,
      });
    },
  };
};

const useAuthSlice = persist(createAuthSlice, {
  name: "auth",
  storage: createJSONStorage(() => localStorage),
});

export { useAuthSlice };
