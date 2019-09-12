// ACTION TYPES (there may be more than one)
const LOAD_BOOKS = 'book/LOAD_BOOKS'
const WANT_TO_READ = 'book/WANT_TO_READ'
const REMOVE_WANT_TO_READ = 'book/REMOVE_WANT_TO_READ'
const RATE_BOOK = 'book/RATE_BOOK'

// ACTION CREATOR - in this file it is a THUNK
export const readLaterBook = (bookId) => {
  return { type: WANT_TO_READ, bookId }
}

export const removeReadLaterBook = (bookId) => {
  return { type: REMOVE_WANT_TO_READ, bookId }
}

export const rateBook = (rating, bookId) => {
  return {type: RATE_BOOK, bookId, rating}
}

export const loadBooks = () => {
  const books = {
   "1" : {title: "Sandman", author: "Neil Gaiman", id: 1, price: "5$", people: 1000, score: 5000, rating: 5, image: "https://vignette.wikia.nocookie.net/marvel_dc/images/c/c7/Sandman_3.jpg/revision/latest?cb=20080121190422" },
   "2" : {title: "Dune", author: "Frank Herbert", id: 2, price: "6$", people: 1600, score: 8000, rating: 5, image: "https://res.cloudinary.com/teepublic/image/private/s--CL7ChMYM--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1556626445/production/designs/4742645_0.jpg" },
   "3" : {title: "Dracula", author: "Bram Stocker", id: 3, price: "1$", people: 250, score: 1000, rating: 4, image: "https://images-na.ssl-images-amazon.com/images/I/91cKI7ntI7L._SY445_.jpg" },
   "4" : {title: "1984", author: "Goerge Orwell", id: 4, price: "7$", people: 2000, score: 8000, rating: 4, image: "data:image/png;base64,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" },
   "5" : {title: "Heart of Darkness", author: "Joseph Conrad", id: 5, price: "1$", people: 250, score: 1000, rating: 4, image: "https://kbimages1-a.akamaihd.net/9b7ea1a5-ff91-4002-be6c-9ee4c82c19fd/353/569/90/False/heart-of-darkness-262.jpg" },
   "6" : {title: "The Man in the High Castle", author: "Philip K. Dick", id: 6, price: "7$", people: 1000, score: 4000, rating: 4, image: "https://images-na.ssl-images-amazon.com/images/I/51Ky9l4DYEL._AC_UL320_SR214,320_.jpg" },
  }
  return {type: LOAD_BOOKS, books}
}

// INITIAL VALUE
const initialState = {
    // List of books that user whant to read later.
    wantToRead: [],
    books: {},
    yourBooksRating: {},
}

const updateOverallBookRating = (book, rating) => {
  book["people"] += 1
  book["score"] += rating
  book["rating"] = book["score"] / book["people"]
  return book
}

const updateBookRatingRatedByYou = (book, rating, yourBooksRating) => {
  const oldRating = yourBooksRating[book.id]
  book['score'] = book['score'] - oldRating + rating
  book["rating"] = book["score"] / book["people"]
  return book;
}

//REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // Number of cases should be equal to number of action types
    case WANT_TO_READ:
      if (state.wantToRead.includes(action.bookId)) {
        return state;
      }
      return {
        ...state,
      wantToRead: state.wantToRead.concat([action.bookId])
      }
    case REMOVE_WANT_TO_READ:
      return {
        ...state,
        wantToRead: state.wantToRead.filter(bookId => bookId !== action.bookId)
      }
    case LOAD_BOOKS:
      return {
        ...state,
        books: {...state.books, ...action.books}
      }
    case RATE_BOOK:
      let newBooksRating = {...state.yourBooksRating}
      const rating = action.rating.rating
      newBooksRating[action.bookId] = rating

      const id = action.bookId.toString();
      let newBooks = {...state.books}

      const wasBookRatedByYou = action.bookId in state.yourBooksRating
      if (wasBookRatedByYou) {
        newBooks[action.bookId] = updateBookRatingRatedByYou(Object.assign({}, newBooks[action.bookId]), rating, state.yourBooksRating)
      } else {
        newBooks[action.bookId] = updateOverallBookRating(Object.assign({}, newBooks[action.bookId]), rating)
      }
      return {
        ...state,
        books: {...state.books, ...newBooks},
        yourBooksRating: newBooksRating,
      }
    default:
      return state
}
}
