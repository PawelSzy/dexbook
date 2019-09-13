import React, {Component} from 'react';
import { connect } from 'react-redux';
import BooksList from 'Components/BooksList/BookList';
import * as actions from 'State/book';

class YourBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {},
    };
  }

  componentDidMount() {
    this.props.loadBooks();
    const filteredBookList = (allBooks, booksId) => {
      let newBookList = {}
      booksId.forEach(id => newBookList[id] = allBooks[id])
      return newBookList
    }
    this.setState({books: filteredBookList(this.props.books, Object.keys(this.props.yourBooksRating))})
  }
  render() {
    const showBook = Object.keys(this.state.books).length > 0 && this.state.books.constructor === Object
    return (
      <div className="container">
        <h2>Books you rated</h2>
        { showBook
          ?
          <div className="col-lg-8">
            <BooksList books={this.state.books}/>
          </div>
          : null
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    yourBooksRating: state.book.yourBooksRating,
    books: state.book.books,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadBooks: () => dispatch( actions.loadBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YourBookList);