import React from 'react'
import { IBook } from '../models/book'

interface BookShelfChangerProps {
  book: IBook;
  onUpdateBook: Function;
}

const BookShelfChanger: React.FC<BookShelfChangerProps> = ({ book, onUpdateBook }) => {
  return (
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={(evt) => {
        onUpdateBook(book, evt.target.value.toString())
      }}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookShelfChanger