import { create } from 'zustand'

export const useAppStore = create((set, get) => ({
  darkMode: false,
  toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),

  favorites: [] as any[],

  addFavorite: (book: any) => {
    const exists = get().favorites.some((b) => b.title === book.title)
    if (!exists) {
      set((state) => ({ favorites: [...state.favorites, book] }))
    }
  },

  removeFavorite: (title: string) =>
    set((state) => ({
      favorites: state.favorites.filter((b) => b.title !== title)
    }))
}))