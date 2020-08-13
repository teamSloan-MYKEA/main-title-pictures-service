import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
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
    let { activeIndex } = this.state;
    console.log('active index: ', activeIndex)
    activeIndex = activeIndex < 1 ? 0 : activeIndex += 1;
    this.setState({ activeIndex });
  }

  goToPreviousSlide() {
    let { activeIndex } = this.state;
    console.log('active index: ', activeIndex)
    activeIndex = activeIndex < 1 ? 0 : activeIndex -= 1;
    this.setState({ activeIndex });
  }

  render() {
    const { activeIndex, images } = this.state;
    return (
      <div className="slider">
        <div>
          <LeftArrow goToPreviousSlide={() => this.goToPreviousSlide()} />
        </div>
        <div>
          <Slide activeIndex={activeIndex} images={images} />
        </div>
        <div>
          <RightArrow goToNextSlide={() => this.goToNextSlide()} />
        </div>
      </div>
    );
  }
}
Slider.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
};

export default Slider;
