import React, { Component } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.onNewSmurf(this.state);
    this.props.history.push("/");
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="col-sm-6">
          <Form onSubmit={this.addSmurf}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                onChange={this.handleInputChange}
                placeholder="Smurf Name"
                value={this.state.name}
                name="name"
                id="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                onChange={this.handleInputChange}
                placeholder="Smurf Age"
                value={this.state.age}
                name="age"
                id="age"
              />
            </FormGroup>
            <FormGroup>
              <Label for="height">Height</Label>
              <Input
                onChange={this.handleInputChange}
                placeholder="Smurf Height"
                value={this.state.height}
                name="height"
                id="age"
              />
            </FormGroup>
            <Button type="submit" color="primary">
              Add to the village
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SmurfForm;
