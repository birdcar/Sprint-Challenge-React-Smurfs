import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
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
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
