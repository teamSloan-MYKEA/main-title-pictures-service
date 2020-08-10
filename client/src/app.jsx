import React, { Component } from 'react';
import axios from 'axios';
import RangeMediaGrid from './RangeMediaGrid.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      productId: 1,
    };
    this.getImages = this.getImages.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    const { productId } = this.state;
    axios.get(`/${productId}`)
      .then((response) => {
        response.data.forEach((imageObj) => {
          this.setState(({ images }) => ({
            images: images.concat(imageObj),
          }
          ))
          console.log("hello")
        });
      });
  }

  render() {
    const { images } = this.state;
    return (
      <RangeMediaGrid images={images} />
    );
  }
}

export default App;
