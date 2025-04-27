import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("loggedInUser") || "null"),
  login: (userData: any) => {
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    set({ user: userData });
  },
  logout: () => {
    localStorage.removeItem("loggedInUser");
    set({ user: null });
  }
}));
