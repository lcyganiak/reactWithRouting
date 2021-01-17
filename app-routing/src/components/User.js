import React, { Component } from 'react'

class User extends Component {


  render() {
    const list = this.props.userList.map(item => {
      return <li key={item.key}>{item.name}</li>
    })
    return (
      <ul>
        {list}
      </ul>

    )
  }
}
export default User