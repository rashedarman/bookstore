import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';

const FETCH = 'bookstore/books/FETCH';
const ADD = 'bookstore/books/ADD';
const DELETE = 'bookstore/books/DELETE';

export const fetchBooks = createAsyncThunk(FETCH, async () => {
  const books = await api.getBooks();
  return books;
});

export const addBook = createAsyncThunk(ADD, async (book) => {
  await api.addBook(book);
  return book;
});

export const deleteBook = createAsyncThunk(DELETE, async (id) => {
  await api.deleteBook(id);
  return id;
});

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'bookstore/books',
  initialState,
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      const currentState = state;
      currentState.books = action.payload;
    },
    [addBook.fulfilled]: (state, action) => {
      const currentState = state;
      const book = { ...action.payload, category: 'TBD' };
      currentState.books = [...state.books, book];
    },
    [deleteBook.fulfilled]: (state, action) => {
      const currentState = state;
      currentState.books = state.books.filter(
        (book) => book.id !== action.payload,
      );
    },
  },
});

export default booksSlice.reducer;
