import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Smurf = props => {
  return (
    <div className="col-sm-3 mx-3 mb-3">
    <Card>
      <CardBody>
          <CardTitle><h4>{props.name}</h4></CardTitle>
      <CardText>
        <ul>
          <li>Height: {props.height} tall</li>
          <li>Age: {props.age} smurf years old</li>
        </ul>
      </CardText>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
      </CardBody>
    </Card>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
