import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slide extends Component {
  constructor({ images, activeIndex }) {
    super(images);
    this.state = {
      images,
    };
  }

  render() {
    const { images, activeIndex } = this.state;
    return (
      <section>
        {
          images.map((image, i) => (
            <div
              className={
                i === activeIndex ? 'active' : 'slide'
              }
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
