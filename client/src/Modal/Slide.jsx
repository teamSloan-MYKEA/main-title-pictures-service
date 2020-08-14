import React from 'react';
import PropTypes from 'prop-types';
import { CarouselImage } from '../Styles';

function Slide({ images, activeIndex }) {
  return (
    <section>
      {
        images.map((image, index) => (
          <div
            className={
              index === activeIndex ? 'active' : 'inactive'
            }
          >
            <CarouselImage src={image.url} alt="IKEA furniture" />
          </div>
        ))
      }
    </section>
  );
}
Slide.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  activeIndex: PropTypes.instanceOf(Number).isRequired,
};

export default Slide;
