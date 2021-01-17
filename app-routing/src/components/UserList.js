import React, { Component } from 'react';
import User from './User'
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    }
  }
  addUser = (event) => {
    event.preventDefault()
    let user = {
      name: this.inputName.value,
      key: Date.now()
    }
    // Rozwiązanie mało eleganckie ale skuteczne 
    // let oldUserList = this.state.userList
    // oldUserList.push(user)
    // this.setState({
    //   userList : oldUserLiist
    // })

    // rowiazanie zgodne z praktyką 

    this.setState((prevState) => {
      return {
        userList: prevState.userList.concat(user)
      }
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          <input ref={(inputName) => { this.inputName = inputName }} type="text" />
          <button type="submit">Dodaj Użytkowniak</button>

        </form>
        <h2>List Użytkowników </h2>
        <User userList={this.state.userList}></User>
      </div>
    )
  }
}

export default UserList