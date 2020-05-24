import React from 'react'
import BookGrid from './BookGrid'
import { IBook } from '../models/book'

interface BookShelfProps {
  id: string,
  title: string;
  books: IBook[];
}

const BookShelf: React.FC<BookShelfProps> = ({ id, title, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookGrid books={books.filter((b) => b.shelf === id)} />
      </div>
    </div>
  )
}

export default BookShelf