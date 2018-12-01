import React, { Component } from 'react';

import Show from './Show';

class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: {lat: 1.234, lng: 2.234},
      dest: {lat: 1.234, lng: 2.234},
      result: null,
    };
  }

  componentDidMount() {
    this.callGoogleMaps();
  }

  callGoogleMaps() {
    console.log(this.state.origin);
    console.log(this.state.dest);

    const result = 123;
    this.setState({result: 123});
  }

  render() {
    return (
      <p>
        <Show result={this.state.result} />
        <Show result={this.state.result} />
        <Show result={this.state.result} />
        <Show result={this.state.result} />
      </p>
    );
  }
}

export default GoogleMaps;
