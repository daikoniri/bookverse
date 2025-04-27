import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardPage } from "./pages/DashboardPage";
import { useAuthStore } from "./stores/authStore";//для авторизации
import { useAppStore } from "./stores/useAppStore";//для темы
import { ThemeToggle } from "./components/ThemeToggle";
import { BookCard } from "./components/BookCard";
import { SearchBar } from "./components/SearchBar";
import { searchBooks } from "./api/bookAPI";
import { useState } from "react";

import { BookDetailsPage } from "./pages/BookDetailsPage";//импортируем страницы
import { FavoritesPage } from "./pages/FavoritesPage";
import { ChatWithAI } from "./components/ChatWithAI";
import { HomePage } from "./pages/HomePage";
import logo from "./assets/logo.jpg";
import {Toaster } from "sonner";

function App() {
  const { darkMode } = useAppStore();//тема
  const { user } = useAuthStore();//получаем пользователя
  return (
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 p-6">
          <Router>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-6">
                <Link to="/favorites" className="text-lg hover:underline">
                  ⭐ Избранное
                </Link>
              </div>
              <ThemeToggle />
            </div>

            <Routes>
              <Route
                path="/"
                element={user ? <HomePage /> : <Navigate to="/login" />}
              />
              <Route path="/book/:title" element={<BookDetailsPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Router>
        </div>
        <Toaster richColors />
      </div>

  );
}


export default App;
