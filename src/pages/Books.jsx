import { useSelector } from 'react-redux';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const BooksPage = () => {
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
