import PropTypes from 'prop-types';
import React from 'react';

const Book = (props) => {
  const { title, author } = props;

  return (
    <li>
      <p>
        {title}
        {' by '}
        {author}
      </p>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
