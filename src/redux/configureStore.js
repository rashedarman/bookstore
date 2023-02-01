import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({ books, categories });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
