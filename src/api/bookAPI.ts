export async function searchBooks(query: string) {//функция для поиска книг
  const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`);//отправляем запрос к OpenLibrary API
  const data = await res.json();//ждем ответ в формате json

  return data.docs.map((book: any) => ({
    title: book.title,//информация о книге
    author: book.author_name?.[0] ?? 'Автор неизвестен',
    cover: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
      : 'https://via.placeholder.com/128x192?text=No+Cover',
    rating: Math.floor(Math.random() * 2 + 4), // рейтинг книг
    key: book.key //ключ для книг
  }));
}