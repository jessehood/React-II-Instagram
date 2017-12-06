import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon
} from "react-bootstrap";
import PropTypes from "prop-types";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="navbar">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
                <Glyphicon
                  className="camera"
                  glyph="glyphicon glyphicon-camera"
                />
                Instagram
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                <div className="searchbox">
                  <input
                    value={this.state.search}
                    onChange={this.handleChange}
                    placeholder="Search..."
                  />
                </div>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <Glyphicon glyph="glyphicon glyphicon-record" />
              </NavItem>
              <NavItem eventKey={2} href="#">
                <Glyphicon glyph="glyphicon glyphicon-heart" />
              </NavItem>
              <NavItem eventKey={3} href="#">
                <Glyphicon glyph="glyphicon glyphicon-user" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.string
};

export default SearchBar;
