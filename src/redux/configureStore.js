import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './categories/categories';

const rootReducer = { books, categories };

const store = configureStore({
  reducer: rootReducer,
});

export default store;
