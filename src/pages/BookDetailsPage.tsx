import { useLocation, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookDetailsByKey } from "../api/bookDetailsAPI";

export function BookDetailsPage() {
  const { state } = useLocation();
  const { title } = useParams();
  const [book, setBook] = useState<any>(state);

  useEffect(() => {
    if (!state && title) {
      // fallback, если нет стейта
      console.warn("Нет state, невозможно получить полные детали книги.");
    } else if (state && state.key) {
      getBookDetailsByKey(state.key).then((details) => {
        setBook((prev: any) => ({
          ...prev,
          description: details.description,
        }));
      });
    }
  }, [state, title]);//получения деталей книги

  if (!book) return <p>Загрузка...</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        to="/"
        className="text-indigo-500 hover:underline mb-4 inline-block"
      >
        ← Назад к поиску
      </Link>

      <h2 className="text-3xl font-bold mb-4">{book.title}</h2>

      {book.cover && (
        <img
          src={book.cover}
          alt={book.title}
          className="w-64 mb-6 rounded shadow mx-auto"
        />
      )}

      <p className="text-lg">
        <strong>Автор:</strong> {book.author}
      </p>
      <p className="text-yellow-500">⭐ {book.rating}</p>

      <div className="mt-6 text-base">{book.description}</div>
    </div>
  );
}
