import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import { BookType } from '../types';

import './Book.scss';
import Progress from './Progress';

const Book = (props) => {
  const dispatch = useDispatch();
  const { data } = props;

  return (
    <li>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">{data.category}</h4>
            <h2 className="book-title">{data.title}</h2>
            <h6 className="book-author">{data.author}</h6>
            <div className="action-buttons">
              <button className="button-outline" type="button">
                Comments
              </button>
              <div className="vertical-divider" />
              <button
                className="button-outline"
                type="button"
                onClick={() => dispatch(deleteBook(data.id))}
              >
                Remove
              </button>
              <div className="vertical-divider" />
              <button className="button-outline" type="button">
                Edit
              </button>
            </div>
          </div>

          <Progress progress={64} />
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  data: BookType.isRequired,
};

export default Book;
