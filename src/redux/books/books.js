import * as api from '../../api';

const FETCH = 'bookstore/books/FETCH';
const ADD = 'bookstore/books/ADD';
const DELETE = 'bookstore/books/DELETE';

const initialStates = {
  books: [],
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case FETCH: {
      return { books: action.payload };
    }
    case ADD:
      return {
        books: [...state.books, action.payload],
      };
    case DELETE:
      return {
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export const fetchBooks = () => async (dispatch) => {
  const books = await api.getBooks();
  dispatch({ type: FETCH, payload: books });
};

export const addBook = (book) => async (dispatch) => {
  await api.addBook(book);
  dispatch({ type: ADD, payload: book });
};

export const deleteBook = (id) => async (dispatch) => {
  await api.deleteBook(id);
  dispatch({ type: DELETE, payload: id });
};

export default reducer;
