import PropTypes from 'prop-types';
import React from 'react';
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
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
