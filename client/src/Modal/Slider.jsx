import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollIndicator from './ScrollIndicator';
import Slide from './Slide';

class Slider extends Component {
  constructor({ images, openImage }) {
    super(images, openImage);
    this.state = {
      activeIndex: 0,
      images,
      openImage,
    };
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  componentDidMount() {
    const { images, openImage } = this.state;
    let openImageIndex = 0;
    images.forEach((image, index) => {
      if (image.url === openImage) {
        openImageIndex = index;
      }
      return 0;
    });
    console.log("image index:", openImageIndex);
    // this.setState({

    // });
  }

  goToNextSlide() {
    const { images } = this.state;
    let { activeIndex } = this.state;
    activeIndex = activeIndex === (images.length - 1) ? (images.length - 1) : activeIndex += 1;
    this.setState({ activeIndex });
  }

  goToPreviousSlide() {
    let { activeIndex } = this.state;
    activeIndex = activeIndex < 1 ? 0 : activeIndex -= 1;
    this.setState({ activeIndex });
  }

  render() {
    const { images, activeIndex, openImage } = this.state;
    return (
      <div>
        <div className="slider" style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => this.goToPreviousSlide()} />
          <Slide activeIndex={activeIndex} images={images} openImage={openImage} />
          <FontAwesomeIcon icon={faArrowRight} onClick={() => this.goToNextSlide()} />
        </div>
        <ScrollIndicator />
      </div>
    );
  }
}
Slider.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  openImage: PropTypes.instanceOf(String).isRequired,
};

export default Slider;
