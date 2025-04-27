import { useAppStore } from "../stores/useAppStore";

export function BookCard({ title, author, cover }: any) {
  const { favorites, addFavorite, removeFavorite } = useAppStore();//функции добавлять в избранное удалять и избранный список

  const isFavorite = favorites.some((b) => b.title === title);

  return (
    <div className="relative bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-md h-full">
      {/* Кнопка избранного */}
      <button
        onClick={(e) => {
          e.stopPropagation();//чтобы не перешел на страницу
          isFavorite
            ? removeFavorite(title)//удалить из избранного
            : addFavorite({ title, author, cover });//проверяем добавлена ли в избранное
        }}
        className="absolute top-2 right-2 text-2xl hover:scale-110 transition-transform"
      >
        {isFavorite ? "🗑" : "❤️"}
      </button>

      <img
        src={cover || "https://via.placeholder.com/128x192?text=No+Cover"}
        alt={title}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{author}</p>
    </div>
  );
}
