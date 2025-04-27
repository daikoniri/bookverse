import { useState } from "react";

export function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Введите название книги или автора"
        className="flex-1 px-4 py-2 border rounded-lg text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => onSearch(query)}//искать при нажатии
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
      >
        🔍 Искать
      </button>
    </div>
  );
}
