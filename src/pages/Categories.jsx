import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  return (
    <>
      <p>{categories.status}</p>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check status
      </button>
    </>
  );
};

export default Categories;
