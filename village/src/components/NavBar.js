import React, { Component } from "react";
import { NavLink as NavRoute } from "react-router-dom";

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar className="mb-4" color="dark" dark expand="md">
        <NavbarBrand href="/">Lambda Smurfs</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavRoute exact to="/">
                <NavLink>Home</NavLink>
              </NavRoute>
            </NavItem>
            <NavItem>
              <NavRoute to="/smurf-form">
                <Button color="primary" className="ml-4 mr-2">
                  Add a Smurf
                </Button>
              </NavRoute>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
