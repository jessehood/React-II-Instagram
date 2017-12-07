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

  setRedHeart = (event) => {
    event.target.style.color = (
      event.target.style.color !== 'red' ? 'red' : 'grey'
    );
  }

  focusCommentInput = (event) => {
    document.querySelector('.Comment__input').focus();
  }

  render() {
    return (
      <div className="Comment-box">
        <Glyphicon
          glyph="glyphicon glyphicon-heart icon--med red"
          onClick={this.setRedHeart}
        />
        <Glyphicon 
          glyph="glyphicon glyphicon-comment icon--med"
          onClick={this.focusCommentInput}
        />
        <div className="Comment-box__likes">{this.state.likes} likes</div>
        <div className="Comment-box__comments">
          {this.state.comments.map((comment, index) => {
            return (
            <div key={index}>
              <span className="Comment__username">{comment.username}</span> {comment.text}
            </div>
          );
          })}
          <div>
            <input className="Comment__input" placeholder="Add a comment..." />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentSection;
