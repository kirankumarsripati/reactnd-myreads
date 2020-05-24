import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import { IBook } from './models/book'

const BooksApp = () => {
  const [books, setBooks] = React.useState<IBook[]>([])

  React.useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books)
    })
  }, [])

  const changeBookStatus = (book: IBook, shelf: string): void => {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf
        setBooks(books.filter(b => b.id !== book.id).concat([book]))
      })
  }

  return (
    <div className="app">
      <Route exact path="/" render={() => (
        <ListBooks books={books} onUpdateBook={changeBookStatus} />
      )} />
      <Route path="/search" render={() => (
        <SearchBooks
          availableBooks={books}
          onUpdateBook={changeBookStatus}
        />
      )} />
    </div>
  )
}

export default BooksApp
