import React from 'react'
import { Link } from 'react-router-dom'
import { IBook } from '../models/book'
import * as BooksAPI from '../BooksAPI'
import BookGrid from './BookGrid'

interface SearchBooksProps {
  availableBooks: IBook[];
  onUpdateBook: Function;
}

const SearchBooks: React.FC<SearchBooksProps> = ({ availableBooks, onUpdateBook }) => {
  const [searchedBooks, setSearchedBooks] = React.useState<IBook[]>([])

  const onInputSearch = (query: string) => {
    const queryStr = query.trim()

    if (queryStr.length <= 2) {
      // search only if more than 2 characters
      setSearchedBooks([])
    } else {
      BooksAPI.search(queryStr).then((result: IBook[] | {
        error: string
      }) => {
        if (Array.isArray(result)) {
          updateSearchedBooks(result)
        } else {
          setSearchedBooks([])
        }
      })
    }
  }

  const updateSearchedBooks = (result: IBook[]) => {
    // if the book is available in already selected books
    // update books current shelf
    const updatedBooks = result.map((book: IBook) => {
      const shelfBook = availableBooks.find( b => b.id === book.id )
      if (shelfBook) {
        book.shelf = shelfBook.shelf
      }
      return book
    })

    setSearchedBooks(updatedBooks)
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(event) => onInputSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookGrid books={searchedBooks} onUpdateBook={onUpdateBook} />
      </div>
    </div>
  )
}

export default SearchBooks