import PropTypes from 'prop-types';
import React from 'react';
import { BookType } from '../types';
import Book from './Book';

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => {
      const { id, title, author } = book;
      return <Book key={id} id={id} title={title} author={author} />;
    })}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(BookType).isRequired,
};

export default BookList;
