import React, { Component } from 'react';
import RangeMediaGrid from './RangeMediaGrid.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }



  render() {
    return (
      <RangeMediaGrid />
    );
  }
}

export default App;
