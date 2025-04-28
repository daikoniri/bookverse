export async function getBookDetailsByKey(workKey: string) {//получение описания книг
  const res = await fetch(`https://openlibrary.org${workKey}.json`);
  const data = await res.json();//ждем ответ в формате JSON

  return {
    title: data.title,
    description: typeof data.description === 'string'
      ? data.description//описание либо оповещение что его нет
      : data.description?.value || 'Описание отсутствует.',
  };
}