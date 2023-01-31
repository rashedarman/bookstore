/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

export const BookType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
});
