import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import { fetchBooks } from '../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const { books } = useSelector((state) => state.books);
  return (
    <>
      <BookList books={books} />
      <br />
      <BookForm />
    </>
  );
};

export default BooksPage;
