import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import { fetchBooks } from '../redux/books/books';

import './Books.scss';

const BooksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const { books } = useSelector((state) => state.books);
  return (
    <div className="container">
      <BookList books={books} />
      <div className="horizontal-divider" />
      <BookForm />
    </div>
  );
};

export default BooksPage;
