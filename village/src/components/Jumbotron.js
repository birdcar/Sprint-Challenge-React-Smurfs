import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Example = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to Smurf Village!</h1>
        <p className="lead">
          We aim to make your smurf studies simple.
        </p>
        <hr className="my-4" />
        <p className="lead">
          <Link to="/smurf-form">
            <Button color="primary">Add a Smurf</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
