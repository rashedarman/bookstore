import React from 'react';

const BookForm = () => (
  <form>
    <input type="text" placeholder="Title" required />
    <input type="text" placeholder="Author" required />
    <button type="submit">Add Book</button>
  </form>
);

export default BookForm;
