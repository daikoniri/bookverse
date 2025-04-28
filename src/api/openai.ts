import axios from "axios";

const OPENROUTER_API_KEY = "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"; // ключ
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions"; // новый URL OpenRouter

export async function askAI(message: string) {
  const response = await axios.post(
    OPENROUTER_API_URL,
    {
      model: "openai/gpt-3.5-turbo", // модель чата
      messages: [{ role: "user", content: message }],
    },
    {
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content.trim();
}
