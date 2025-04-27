import { useAppStore } from "../stores/useAppStore";
import { BookCard } from "../components/BookCard";
import { Link } from "react-router-dom";

export function FavoritesPage() {
  const { favorites } = useAppStore();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Link to="/" className="text-indigo-500 hover:underline mb-6 block">
        ← Назад
      </Link>

      <h1 className="text-3xl font-bold mb-6">⭐ Избранные книги</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">Нет избранных книг.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      )}
    </div>
  );
}
