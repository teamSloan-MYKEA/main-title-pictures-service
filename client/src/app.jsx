import React, { Component } from 'react';
import axios from 'axios';
import { Reset } from 'styled-reset';
import RangeMediaGrid from './RangeMediaGrid';
import Modal from './Modal/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isCollapsed: true,
      productId: 1,
      showModal: false,
    };
    this.getImages = this.getImages.bind(this);
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    this.showModal = this.showModal.bind(this);
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
  }

  showModal() {
    this.setState({
      showModal: true,
    });
  }

  render() {
    const { images, isCollapsed, showModal } = this.state;
    return (
      <div>
        <Reset />
        <RangeMediaGrid
          images={
            isCollapsed ? images.slice(0, 4) : images
          }
          handleClick={this.handleShowMoreClick}
          showModal={this.showModal}
        />
        <Modal show={showModal} />
      </div>
    );
  }
}

export default App;
