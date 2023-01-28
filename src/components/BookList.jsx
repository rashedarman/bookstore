import React from 'react';
import Book from './Book';

const BookListData = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First century',
    author: 'Suzanne Collins',
  },
];

const BookList = () => (
  <ul>
    {BookListData.map((book) => {
      const { id, title, author } = book;
      return <Book key={id} title={title} author={author} />;
    })}
  </ul>
);

export default BookList;
