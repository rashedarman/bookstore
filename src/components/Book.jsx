import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const { id, title, author } = props;

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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
