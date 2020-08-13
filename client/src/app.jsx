import React, { Component } from 'react';
import axios from 'axios';
import { Reset } from 'styled-reset';
import RangeMediaGrid from './RangeMediaGrid';
import Modal from './Modal/ModalDashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isCollapsed: true,
      productId: 1,
      show: false,
      modalPicture: '',
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
    // 2nd arg can contain params
    // Maybe send to /products with request.params as id
    // window.location.pathname.split('/')[1]
    axios.get(`/${productId}`)
      .then((response) => {
        response.data.forEach((imageObj) => {
          this.setState(({ images }) => ({
            images: images.concat(imageObj),
          }
          ));
        });
      })
      .catch((err) => console.error(err.message));
  }

  handleShowMoreClick(e) {
    e.preventDefault();
    this.setState(({ isCollapsed }) => ({
      isCollapsed: !isCollapsed,
    }));
  }

  // Sets show boolean and sets clicked picture for modal open
  showModal(e) {
    const picture = e.target.src;
    this.setState(({ show, modalPicture }) => ({
      show: !show,
      modalPicture: modalPicture.replace(modalPicture, '') + picture,
    }));
  }

  render() {
    const {
      images, isCollapsed, show, modalPicture,
    } = this.state;
    return (
      <div>
        <Reset />
        <RangeMediaGrid
          images={
            isCollapsed ? images.slice(0, 4) : images
          }
          handleClick={this.handleShowMoreClick}
          showModal={this.showModal}
          isCollapsed={isCollapsed}
        />
        <Modal show={show} images={images} openImage={modalPicture} onClose={this.showModal} />
      </div>
    );
  }
}

export default App;
