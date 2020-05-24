import React from 'react'
import { IBook } from '../models/book'
import Book from './Book'

interface BookGridProps {
  books: IBook[];
}

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ol>
  )
}

export default BookGrid