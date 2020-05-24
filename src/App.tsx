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

  return (
    <div className="app">
      <Route exact path="/" render={() => (
        <ListBooks books={books} />
      )} />
      <Route path="/search" component={SearchBooks} />
    </div>
  )
}

export default BooksApp
