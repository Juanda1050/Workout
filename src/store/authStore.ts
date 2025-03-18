import { IAuthState, IAuthActions } from "@/model/auth";
import { create } from "zustand";

const useAuthStore = create<IAuthState & IAuthActions>((set) => ({
  token: null,
  isAuthenticated: false,
  setToken: (value) => set({ token: value }),
  setAuthenticated: (value) => set({ isAuthenticated: value }),
  clearAuth: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;
