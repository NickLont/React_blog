import React, {Component} from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class PostsIndex extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func,
    posts: PropTypes.object
  }
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    return _.map(this.props.posts, post => {
      console.log('mpika edw', post)
      return (
        <li className="list-group-item" key={post.id }>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      )
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {
            this.renderPosts()
          }
        </ul>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
