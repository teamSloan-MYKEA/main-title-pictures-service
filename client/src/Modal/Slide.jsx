import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slide extends Component {
  constructor({ images, activeIndex }) {
    super(images);
    this.state = {
      slides: images,
    };
  }

  render() {
    const { slides, activeIndex } = this.state;
    return (
      <section>
        {
          slides.map((image, i) => (
            <div
              className={
                i === activeIndex ? 'active' : 'slide'
              }
              key={i}
            >
              <img src={image.url} alt="IKEA furniture" />
            </div>
          ))
        }
      </section>
    );
  }
}
Slide.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
};

export default Slide;
