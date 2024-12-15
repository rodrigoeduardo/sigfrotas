import { create } from "zustand";

import { AuthSlice, useAuthSlice } from "./auth.store";
import { SidebarSlice, useSidebarSlice } from "./sidebar.store";

type Store = AuthSlice & SidebarSlice;

const useStore = create<Store>()((...params) => {
  return {
    ...useAuthSlice(...params),
    ...useSidebarSlice(...params),
  };
});

export { useStore };
