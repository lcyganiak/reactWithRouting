import React, { Component } from 'react'

class User extends Component {

  removeUser = (user) => {
    this.props.delete(user.key)
  }
  render() {
    const list = this.props.userList.map(item => {
      return <li onClick={() => this.removeUser(item)} key={item.key}>{item.name}</li>
    })
    return (
      <ul>
        {list}
      </ul>

    )
  }
}
export default User