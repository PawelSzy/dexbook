import React from 'react'
import './Book.scss'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../../State/book';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { NavLink } from 'react-router-dom';
import BookFormButton from 'Components/BookFormButton/BookFormButton'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)

const book = (props) => {
  const isBookMarkedToRead = props.wantToReadBooks.includes(Number(props.id))
  const yourBookRating = props.id in props.booksRating ? props.booksRating[props.id] : 0
  const isBookReaded = props.readedBooks.includes(Number(props.id))
  const WANT_TO_READ = "Want to read"
  const READED = "Readed"
  const readedOrToReadText = isBookReaded ? READED : WANT_TO_READ
  const readedOrToReadClickFunction = isBookReaded ? () => props.removeBookFromReaded(props.id) : () => props.deleteFromReadLater(props.id)

  return (
    <div className="book row border-top">
      <div className="col-md-2 my-1">
        <img className="book__image img-fluid" src={props.image} alt="book cover {props.title}" />
      </div>

      <div className="col-md-6 my-auto text-md-left">
        <div className="book__title">
          <NavLink to={`/book/${props.id}`} >
            {props.title}
          </NavLink>
        </div>
        <div className="book__author">{props.author}</div>

        <div className="book__rating"><Rater rating={props.rating} total={5} interactive={false} /></div>
        <div className="row col-md-6 pl-0 book__smaller-text mx-auto mx-md-0">
          <div className="book__price col-md-6 px-0">price: {props.price}</div>
          <div className="book__score col-md-6">score: {props.score}</div>
        </div>
      </div>

      <div className="col-md-4 my-auto">
        <div>
          {
            (isBookMarkedToRead || isBookReaded)
              ?
                <Button variant="success" size="sm" onClick={readedOrToReadClickFunction}>
                  <FontAwesomeIcon icon={faCheck} className="mr-2" />
                  { readedOrToReadText }
                </Button>
              :
              <BookFormButton id={props.id} />
          }
        </div>

        <div className="book__mark-to-read book__rating">
          <div className="book__mark-to-read__text text-secondary mt-1">Rate this book</div>
          <Rater rating={Math.round(yourBookRating)} total={5} onRate={(rating) => props.rateBook(rating, props.id)} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    wantToReadBooks: state.book.wantToRead,
    booksRating: state.book.yourBooksRating,
    readedBooks: state.book.readedBooks,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    readLater: bookId => dispatch( actions.readLaterBook(bookId)),
    deleteFromReadLater: bookId => dispatch(actions.removeReadLaterBook(bookId)),
    rateBook: (rating, bookId) => dispatch(actions.rateBook(rating, bookId)),
    addBookToReaded: bookId => dispatch(actions.addBookToReaded(bookId)),
    removeBookFromReaded: bookId => dispatch(actions.removeBookFromReaded(bookId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(book)
