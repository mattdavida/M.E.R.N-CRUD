import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost } from "../actions";
import { deletePost } from "../actions";

export class PostsShow extends Component {

  componentDidMount() {
      //params is built into react-router and will match all wildcards
      //with a url. In our case it is only the id.
      const { id } = this.props.match.params;
      //we are able to use fetch post because we imported it into the file
      //and wired it up with the connect function
      this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    //Create action creator to delete post
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

//{posts} = state.posts
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {  fetchPost, deletePost })(PostsShow);
