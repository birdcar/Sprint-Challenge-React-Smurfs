import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log("Err:", err));
  }

  handleNewSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log("Err:", err));
  };

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/smurf-form">Add a Smurf</NavLink>
        </nav>
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              editSmurf={this.editSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} onNewSmurf={this.handleNewSmurf} />
          )}
        />
      </div>
    );
  }
}

export default App;
