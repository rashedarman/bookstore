import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

import './BookForm.scss';

const BookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ id: Date.now(), ...book }));

    // clear input fields after dispatch
    setBook({ title: '', author: '' });
  };

  return (
    <section>
      <h2 className="form-title">Add new book</h2>
      <form className="add-form">
        <input
          type="text"
          className="input"
          placeholder="Book title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          required
        />
        <input
          type="text"
          className="input"
          placeholder="Author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          required
        />
        <button
          className="primary-button-big"
          type="submit"
          onClick={handleSubmit}
        >
          Add book
        </button>
      </form>
    </section>
  );
};

export default BookForm;
