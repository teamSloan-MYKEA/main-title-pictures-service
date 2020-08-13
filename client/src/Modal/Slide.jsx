import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Img } from '../Styles';

class Slide extends Component {
  constructor({ images, activeIndex }) {
    super(images);
    this.state = {
      images,
      activeIndex,
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
                i === activeIndex ? 'active' : 'inactive'
              }
            >
              <Img src={image.url} alt="IKEA furniture" />
            </div>
          ))
        }
      </section>
    );
  }
}
Slide.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  activeIndex: PropTypes.instanceOf(Number).isRequired,
};

export default Slide;
