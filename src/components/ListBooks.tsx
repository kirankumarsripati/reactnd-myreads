import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const ListBooks = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading" />
          <BookShelf title="Want to Read" />
          <BookShelf title="Read" />
        </div>
      </div>
      <div className="open-search">
        <Link className="button" to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks