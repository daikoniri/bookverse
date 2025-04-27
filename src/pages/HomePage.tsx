import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore"; 
import { searchBooks } from "../api/bookAPI";
import { SearchBar } from "../components/SearchBar";
import { BookCard } from "../components/BookCard";
import { ChatWithAI } from "../components/ChatWithAI";
import logo from "../assets/logo.jpg";

export function HomePage() {
  const { user, logout } = useAuthStore();
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (query: string) => {
    setLoading(true);
    const result = await searchBooks(query);
    setBooks(result);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-10 px-4">
      {/* Войти / Выйти кнопка */}
      <div className="flex justify-end w-full mb-4">
        {user ? (
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
          >
            Выйти
          </button>
        ) : (
          <a
            href="/login"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            Войти
          </a>
        )}
      </div>

      {/* Лого */}
      <img
        src={logo}
        alt="BookVerse Logo"
        className="w-10 h-auto mx-auto mb-6"
      />

      {/* Поиск */}
      <div className="w-full max-w-xl mb-20">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Книги */}
      <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-64 bg-zinc-300 dark:bg-zinc-700 rounded-xl animate-pulse"
              />
            ))
          : books.map((b, i) => (
              <div
                key={i}
                onClick={() =>
                  navigate(`/book/${encodeURIComponent(b.title)}`, { state: b })
                }
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <BookCard {...b} />
              </div>
            ))}
      </div>

      {/* Чат с ИИ */}
      <ChatWithAI />
    </div>
  );
}
