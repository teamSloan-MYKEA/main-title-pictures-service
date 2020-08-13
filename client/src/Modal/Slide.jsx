import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slide extends Component {
  constructor({ images }) {
    super(images);
    this.state = {
      images: images,
    };
  }

  render() {
    return (
      <section>
        Hello from Slide
      </section>
    );
  }
}
Slide.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
};

export default Slide;
