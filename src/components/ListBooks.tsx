import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import { IBook } from '../models/book'

interface ListBooksProps {
  books: IBook[];
}

const ListBooks: React.FC<ListBooksProps> = ({ books }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading" books={books} />
          <BookShelf title="Want to Read" books={books} />
          <BookShelf title="Read" books={books} />
        </div>
      </div>
      <div className="open-search">
        <Link className="button" to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks