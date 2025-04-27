import { useState } from "react";
import { askAI } from "../api/openai"; // Это файл где хранится функция обращения к API

export function ChatWithAI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    //чат с ии
    if (!input.trim()) return;
    setLoading(true);

    const userMessage = `👤 Ты: ${input}`;
    setMessages((prev) => [...prev, userMessage]);

    try {
      const aiResponse = await askAI(input);
      setMessages((prev) => [...prev, `🤖 ИИ: ${aiResponse}`]);
    } catch (error) {
      setMessages((prev) => [...prev, "Ошибка при обращении к ИИ."]);
    }

    setInput("");
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAsk();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">🤖 BookAI</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Спросите про книги..."
          className="flex-1 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-2 bg-white dark:bg-zinc-900"
        />
        <button
          onClick={handleAsk}
          disabled={loading}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:bg-indigo-300"
        >
          {loading ? "..." : "Отправить"}
        </button>
      </div>

      <div className="space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
