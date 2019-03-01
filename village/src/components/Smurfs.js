import React, { Component, Fragment } from 'react';

import Jumbotron from './Jumbotron';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron />
        <div className="d-flex flex-wrap justify-content-around align-items-start">
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              key={smurf.id}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              name={smurf.name}
              onEdit={this.props.onEdit}
              onDelete={this.props.onDelete}
            />
          );
        })}
        </div>
      </Fragment>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
