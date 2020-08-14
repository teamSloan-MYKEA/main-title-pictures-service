import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollIndicator from './ScrollIndicator';
import Slide from './Slide';
import { CarouselContent } from '../Styles';

class Slider extends Component {
  constructor({ images, openImage, close }) {
    super();
    this.state = {
      activeIndex: 0,
      images,
      openImage,
      close,
    };
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  // First modal image matches user click
  componentDidMount() {
    const { images, openImage } = this.state;
    let openImageIndex = 0;
    images.forEach((image, index) => {
      if (image.url === openImage) {
        openImageIndex = index;
      }
      return 0;
    });
    this.setState({ activeIndex: openImageIndex });
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
    const {
      images, activeIndex, openImage, close,
    } = this.state;
    return (
      <div>
        <KeyboardEventHandler
          handleKeys={['left', 'right', 'esc']}
          onKeyEvent={(key) => {
            if (key === 'left') {
              this.goToPreviousSlide();
            } else if (key === 'right') {
              this.goToNextSlide();
            } else if (key === 'esc') {
              close();
            }
          }}
        />
        <CarouselContent>
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => this.goToPreviousSlide()} />
          <Slide activeIndex={activeIndex} images={images} openImage={openImage} />
          <FontAwesomeIcon icon={faArrowRight} onClick={() => this.goToNextSlide()} />
        </CarouselContent>
        <ScrollIndicator activeIndex={activeIndex} />
      </div>
    );
  }
}
Slider.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  openImage: PropTypes.instanceOf(String).isRequired,
  close: PropTypes.instanceOf(Function).isRequired,
};

export default Slider;
