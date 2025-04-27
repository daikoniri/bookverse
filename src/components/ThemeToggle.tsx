import { useAppStore } from "../stores/useAppStore";

export function ThemeToggle() {
  const { darkMode, toggleTheme } = useAppStore();
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md bg-zinc-200 dark:bg-zinc-800"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
