import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

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
    <form>
      <input
        type="text"
        placeholder="Title"
        required
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        required
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
