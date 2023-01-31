const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialStates = {
  books: [
    {
      id: 1,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
    },
    {
      id: 2,
      title: "Ender's Game",
      author: 'Orson Scott Card',
    },
    {
      id: 3,
      title: 'The War of the Worlds',
      author: 'H.G. Wells',
    },
  ],
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case ADD:
      return {
        books: [...state.books, action.payload],
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
