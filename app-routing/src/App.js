import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import './App.scss';

class App extends Component {

  render() {
    return (

      <Router>
        <ul className="ulNav">
          <li> <Link to="/">
            <p>Home</p>
          </Link></li>
          <li> <Link to="/user-list">
            <p>User List</p>
          </Link></li>
        </ul>



        <Route exact path="/" >

          <Home imgPath='https://www.fotomaniak.pl/wp-content/uploads/fotomaniak/2018/03/chmura-foto.jpg'
          ></Home>
        </Route>
        <Route exact path="/user-list" >
          <UserList></UserList>
        </Route>

      </Router>

    );
  }

}

export default App;
