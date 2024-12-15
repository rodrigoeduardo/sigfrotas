import { StateCreator } from 'zustand'

type State = {
  isOpen: boolean
}

type Actions = {
  setOpen: (open: boolean) => void
}

export type SidebarSlice = State & Actions

const initialState: State = {
  isOpen: true
}

const useSidebarSlice: StateCreator<SidebarSlice> = (set) => {
  return {
    ...initialState,
    setOpen: (open: boolean) => {
      set({ isOpen: open })
    },
    reset: () => {
      set(initialState)
    }
  }
}

export { useSidebarSlice }
