import React, { Component } from 'react';
import axios from 'axios';
import RangeMediaGrid from './RangeMediaGrid';
import Modal from './Modal/ModalDashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isCollapsed: true,
      show: false,
      modalPicture: '',
      description: '',
      productIdentifierNumber: 0,
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
        response.data.forEach((imageObj) => {
          this.setState(({ images }) => ({
            images: images.concat(imageObj),
            description: imageObj.description,
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
    const DescriptionText = window.styled.div`
    color: #666;
    font-family: 'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', -apple-system, sans-serif !important;
    margin-bottom: 3.75rem;
    max-width: 33.125rem;
    padding-bottom: 1.25rem;
    `;
    const ProductIdentifierNumber = window.styled.div`

    `;
    const {
      images, isCollapsed, show, modalPicture, description,
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
        <DescriptionText>{description}</DescriptionText>
      </div>
    );
  }
}

export default App;
