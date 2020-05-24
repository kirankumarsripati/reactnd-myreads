import React from 'react'
import { IBook } from '../models/book'
import BookShelfChanger from './BookShelfChanger'

interface BookProps {
  book: IBook;
  onUpdateBook: Function;
}

const Book: React.FC<BookProps> = ({ book, onUpdateBook }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks && book.imageLinks.thumbnail) || ''})` }}></div>
        <BookShelfChanger book={book} onUpdateBook={onUpdateBook} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(', ')}
      </div>
    </div>
  )
}

export default Book