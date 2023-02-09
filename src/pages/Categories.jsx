import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <button
        type="button"
        className="primary-button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
      <h2>{categories.status}</h2>
    </div>
  );
};

export default Categories;
