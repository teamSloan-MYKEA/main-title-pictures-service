import React, { Component } from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import PropTypes from 'prop-types';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      length: landingData.length,
    };
  }

  goToNextSlide() {

  }

  gotToNextSlide

  render() {
    return (
      <div>
        <div onClick={gotToNextSlide}>{element}</div>
      </div>
    );
  }
}
Slider.propTypes = {
  goToNextSlide: PropTypes.instanceOf(Function).isRequired,
  goToPreviousSlide: PropTypes.instanceOf(Function).isRequired,
};

export default Slider;
