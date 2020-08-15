import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollIndicator from './ScrollIndicator';
import Slide from './Slide';
import { CarouselContent, CarouselArrow } from '../Styles';

class Slider extends Component {
  constructor({ images, openImage, close }) {
    super();
    this.state = {
      activeIndex: 0,
      images,
      openImage,
      close,
      slideDirection: '',
    };
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
  }

  // First modal image matches user click
  componentDidMount() {
    const { images, openImage } = this.state;
    let { slideDirection } = this.state;
    let openImageIndex = 0;
    images.forEach((image, index) => {
      if (image.url === openImage) {
        openImageIndex = index;
      }
      return 0;
    });
    slideDirection = 'up';
    this.setState({ activeIndex: openImageIndex, slideDirection });
  }

  goToNextSlide() {
    const { images } = this.state;
    let { slideDirection, activeIndex } = this.state;
    activeIndex = activeIndex === (images.length - 1) ? (images.length - 1) : activeIndex += 1;
    slideDirection = 'right';
    this.setState({ activeIndex, slideDirection });
  }

  goToPreviousSlide() {
    let { activeIndex, slideDirection } = this.state;
    activeIndex = activeIndex < 1 ? 0 : activeIndex -= 1;
    slideDirection = 'left';
    this.setState({ activeIndex, slideDirection });
  }

  goToSlide(targetIndex) {
    let { activeIndex, slideDirection } = this.state;
    slideDirection = activeIndex > targetIndex ? 'left' : 'right';
    activeIndex = targetIndex;
    this.setState({ activeIndex, slideDirection });
  }

  render() {
    const {
      images, activeIndex, openImage, close, slideDirection,
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
        <CarouselContent className="carousel-content">
          {/* Left arrow disappears at end of carousel */}
          {activeIndex === 0 ? <div /> : (
            <CarouselArrow>
              <FontAwesomeIcon icon={faArrowLeft} onClick={() => this.goToPreviousSlide()} />
            </CarouselArrow>
          )}
          <Slide
            activeIndex={activeIndex}
            images={images}
            openImage={openImage}
            slideDirection={slideDirection}
          />
          {/* Right arrow disappears at end of carousel */}
          {activeIndex === images.length - 1 ? <div /> : (
            <CarouselArrow>
              <FontAwesomeIcon icon={faArrowRight} onClick={() => this.goToNextSlide()} />
            </CarouselArrow>
          )}
        </CarouselContent>
        <ScrollIndicator activeIndex={activeIndex} images={images} goToSlide={this.goToSlide} />
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
