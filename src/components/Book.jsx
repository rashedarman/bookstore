import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import { BookType } from '../types';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    data: { id, title, author },
  } = props;

  return (
    <li>
      <p>
        {title}
        {' by '}
        {author}
        &nbsp;
        <button type="button" onClick={() => dispatch(deleteBook(id))}>
          delete
        </button>
      </p>
    </li>
  );
};

Book.propTypes = {
  data: BookType.isRequired,
};

export default Book;
