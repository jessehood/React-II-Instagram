import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import './CommentSection.css';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      comments: []
    };
  }

  componentDidMount() {
    this.setState({
      likes: this.props.likes,
      comments: this.props.comments
    });
  }

  render() {
    return (
      <div className="post__comment-box">
        <Glyphicon glyph="glyphicon glyphicon-heart icon--med" />
        <Glyphicon glyph="glyphicon glyphicon-comment icon--med" />
        <div className="comment-box__likes">{this.state.likes} likes</div>
        <div className="comment-box__comments">
          {this.state.comments.map((comment, index) => {
            return (
            <div key={index}>
              <span className="comment__username">{comment.username}</span> {comment.text}
            </div>
          );
          })}
          <div>
            <input className="comment__input" placeholder="Add a comment..." />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentSection;
