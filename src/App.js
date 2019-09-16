import React, {Component} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './Containers/MainPage/MainPage';
import ToReadBooksList from 'Components/BooksLists/ToReadBooksList/ToReadBooksList'
import YourBookList from 'Components/BooksLists/YourBookList/YourBookList'
import SearchBookList from 'Components/BooksLists/SearchBookList/SearchBookList'
import NavMenu from 'Components/NavMenu/NavMenu';
import BookPage from 'Containers/BookPage/BookPage'

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <Switch>
          <Route path="/to-read" exact component={ToReadBooksList} />
          <Route path="/your-books" exact component={YourBookList} />
          <Route path="/search-books" exact component={SearchBookList} />
          <Route path="/book" component={BookPage} />
          <Route path="/" exact component={MainPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
