import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import BooksList from './Components/BooksList/BookList';

import { connect } from 'react-redux';
import * as actions from './State/book';

class App extends Component {
  componentDidMount() {
    this.props.loadBooks();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <BooksList books={this.props.books}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    books: state.book.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadBooks: () => dispatch( actions.loadBooks()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
