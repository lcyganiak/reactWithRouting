import React, { Component } from 'react';
import OnePost from './OnePost';

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.getPosts()
  }
  getPosts() {

  }
  render() {
    const onePost = this.state.posts.map(item => {
      return item
    })
    return (
      <OnePost onePost={onePost}></OnePost>
    )
  }

}
export default PostList