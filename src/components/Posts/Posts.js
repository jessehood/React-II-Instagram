import React, { Component } from "react";
import PropTypes from "prop-types";
import PostContainer from "../PostContainer/PostContainer";
import dummyData from "../../dummy-data";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div>
        {this.state.data.map((post, index) => {
          return <PostContainer key={index} post={post} />;
        })}
      </div>
    );
  }
}

Posts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Posts;
