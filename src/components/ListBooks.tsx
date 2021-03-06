import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import { IBook } from '../models/book'
import { Shelves } from '../models/shelf'

interface ListBooksProps {
  books: IBook[];
  onUpdateBook: Function;
}

const ListBooks: React.FC<ListBooksProps> = ({ books, onUpdateBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Shelves.map((shelf) => (
            <BookShelf
              key={shelf.id}
              id={shelf.id}
              title={shelf.name}
              books={books}
              onUpdateBook={onUpdateBook}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link className="button" to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks