import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
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
      </p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>
        remove
      </button>
    </li>
  );
};

Book.propTypes = {
  data: BookType.isRequired,
};

export default Book;
