import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

const BooksApp = () => {
  return (
    <div className="app">
      <Route exact path="/" component={ListBooks} />
      <Route path="/search" component={SearchBooks} />
    </div>
  )
}

export default BooksApp
