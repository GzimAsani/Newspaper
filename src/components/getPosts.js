import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
// import GetUsers from './getUsers';
import StatusFilter from './StatusFilter';

class getPosts extends React.Component {

  componentDidMount() {
    this.props.fetchPosts()
  }


  returnPost = () => {
    return this.props.posts.map(post => {
      return (
        <div className="card container d-flex" key={post.id}>
          <div className="card-body">
            <h5 className="card-title text-primary">
              {post.title}
            </h5>
            <div className="card-text text-success">{post.body}</div>
            {/* <GetUsers userId={post.userId} /> */}
          </div>
        </div>
      )
    })
  }


  render() {
    return (

      <div>
        < StatusFilter />
        {this.returnPost()}
      </div>
    );
  };
};

const getMapToProps = (state) => {
  return { posts: state.posts }
}

export default connect(getMapToProps, { fetchPosts })(getPosts)