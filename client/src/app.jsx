import React, { Component } from 'react';
import axios from 'axios';
import { Reset } from 'styled-reset';
import RangeMediaGrid from './RangeMediaGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      collapsedImages: [],
      isCollapsed: true,
      productId: 1,
    };
    this.getImages = this.getImages.bind(this);
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
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
          ));
        });
      });
  }

  handleShowMoreClick(e) {
    e.preventDefault();
    this.setState(({ isCollapsed }) => ({
      isCollapsed: !isCollapsed,
    }));

    console.log("Button was clicked", this.state.isCollapsed);
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <Reset />
        <RangeMediaGrid images={images} handleClick={this.handleShowMoreClick} />
      </div>
    );
  }
}

export default App;
