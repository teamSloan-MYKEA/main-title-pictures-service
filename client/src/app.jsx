import React, { Component } from 'react';
import axios from 'axios';
import RangeMediaGrid from './RangeMediaGrid';
import Modal from './Modal/ModalDashboard';
import { ProductSummary, DescriptionText, ProductIdentifierNumber } from './Styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isCollapsed: true,
      show: false,
      modalPicture: '',
      description: '',
      productIdentifier: '',
    };
    this.getImages = this.getImages.bind(this);
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    axios.get(`pictures${window.location.pathname}`)
      .then((response) => {
        // we need to parse this out and send it back somehow on the server
        // pretty much needless complexity but it shouldn't be hard to get it
        // back in order. It looks like we are looking for an array of objects
        // with properties of description_id, images, productIdentifier?
        // seems right, not sure
        response.data.forEach((imageObj) => {
          alert(imageObj); // currently receiving 6 alerts with urls
          const randomDescriptionNumber = imageObj.description_id
            * Math.floor((Math.random() * 100));
          this.setState(({ images, productIdentifier }) => ({
            // so we are doing a setState for each individual image?
            images: images.concat(imageObj),
            description: imageObj.description,
            productIdentifier: `${String(productIdentifier)}${String(randomDescriptionNumber)}.`,
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
  // If no event was fired, sets Modal disappear.
  showModal(e) {
    if (e) {
      const picture = e.target.src;
      this.setState(({ show, modalPicture }) => ({
        show: !show,
        modalPicture: modalPicture.replace(modalPicture, '') + picture,
      }));
    } else {
      this.setState(({ show }) => ({
        show: !show,
      }));
    }
  }

  render() {
    const {
      images, isCollapsed, show, modalPicture, description, productIdentifier,
    } = this.state;
    return (
      <div>
        <RangeMediaGrid
          images={
            isCollapsed ? images.slice(0, 4) : images
          }
          handleClick={this.handleShowMoreClick}
          showModal={this.showModal}
          isCollapsed={isCollapsed}
        />
        <div>
          <Modal show={show} images={images} openImage={modalPicture} onClose={this.showModal} />
        </div>
        <ProductSummary>
          <DescriptionText>{description}</DescriptionText>
          <ProductIdentifierNumber>{productIdentifier.slice(0, -1)}</ProductIdentifierNumber>
        </ProductSummary>
      </div>
    );
  }
}

export default App;
