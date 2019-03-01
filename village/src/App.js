import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import NavBar from './components/NavBar';
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

  handleEditSmurf = (id, smurf) => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };

  handleDeleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              onDelete={this.handleDeleteSmurf}
              onEdit={this.handleEditSmurf}
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
