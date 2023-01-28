import PropTypes from 'prop-types';
import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <li>
      {title}
      {'\n'}
      {author}
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
