//display portion

import React, { Component } from 'react';


class Show extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
      {this.props.result}
      </p>
    );
  }
}

export default Show;
