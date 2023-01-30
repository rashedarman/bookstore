const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialStates = {
  books: [],
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case ADD:
      return {
        books: [...state.books, ...action.payload],
      };
    case REMOVE:
      return {
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD, payload: book });

export const removeBook = (id) => ({ type: REMOVE, payload: id });

export default reducer;
