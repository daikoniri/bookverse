import { create } from "zustand";
import { toast } from "sonner";
interface AuthState {
  user: string | null;
  login: (email: string) => void;
  logout: () => void;
}
//Хранилище авторизации с использованием Zustand
export const useAuthStore = create<AuthState>((set) => ({
  // При загрузке приложения пытаемся взять пользователя из localStorage
  user: localStorage.getItem('user') || null,
  login: (email) => {
    localStorage.setItem('user', email); // Сохраняем email в localStorage
    set({ user: email });                // Обновляем состояние
    toast.success("Успешный вход!");      //Показываем всплывающее сообщение
  },

  logout: () => {
    localStorage.removeItem('user');     // Удаляем email из localStorage
    set({ user: null });                  // Обновляем состояние
    toast.info("Вы вышли из аккаунта.");  // Показываем всплывающее сообщение
  }
}));