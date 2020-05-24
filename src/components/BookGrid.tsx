import React from 'react'
import { IBook } from '../models/book'
import Book from './Book'

interface BookGridProps {
  books: IBook[];
  onUpdateBook: Function;
}

const BookGrid: React.FC<BookGridProps> = ({ books, onUpdateBook }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} onUpdateBook={onUpdateBook} />
        </li>
      ))}
    </ol>
  )
}

export default BookGrid