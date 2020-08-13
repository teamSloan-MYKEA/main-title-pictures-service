import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollIndicator from './ScrollIndicator';
import Slide from './Slide';

class Slider extends Component {
  constructor({ images }) {
    super(images);
    this.state = {
      activeIndex: 0,
      images,
    };
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
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
    const { images, activeIndex } = this.state;
    return (
      <div>
        <div className="slider" style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => this.goToPreviousSlide()} />
          <Slide activeIndex={activeIndex} images={images} />
          <FontAwesomeIcon icon={faArrowRight} onClick={() => this.goToNextSlide()} />
        </div>
        <ScrollIndicator />
      </div>
    );
  }
}
Slider.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
};

export default Slider;
