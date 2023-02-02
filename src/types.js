/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

export const BookType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
});
