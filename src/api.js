import axios from 'axios';

const APP_ID = 'Uz4mAxrRWHz1icevPClg';

const instance = axios.create({
  baseURL: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBooks = async () => {
  const books = await instance.get('/books');
  return Object.entries(books.data).map(([id, book]) => {
    const [{ title, author, category }] = book;
    return {
      id, title, author, category,
    };
  });
};

export const addBook = async ({
  id,
  title,
  author,
  category = 'Uncategorized',
}) => {
  await instance.post('/books', {
    item_id: id,
    title,
    author,
    category,
  });
};

export const deleteBook = async (id) => {
  await instance.delete(`/books/${id}`);
};

export default instance;
