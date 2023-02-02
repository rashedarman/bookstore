import PropTypes from 'prop-types';
import React from 'react';
import { BookType } from '../types';
import Book from './Book';

import './BookList.scss';

const BookList = ({ books }) => (
  <ul className="books">
    {books.map((book) => (
      <Book key={book.id} data={book} />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(BookType).isRequired,
};

export default BookList;
