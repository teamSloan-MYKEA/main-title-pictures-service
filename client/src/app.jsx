import React, { Component } from 'react';
import axios from 'axios';
import RangeMediaGrid from './RangeMediaGrid.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      productId: 0,
    };
    this.getImages = this.getImages.bind(this);
  }

  getImages() {
    axios.get(`/${productId}`)
      .then((response) => {
        console.log(response);
      })
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    return (
      <RangeMediaGrid />
    );
  }
}

export default App;
