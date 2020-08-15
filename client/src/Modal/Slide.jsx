import React from 'react';
import PropTypes from 'prop-types';
import InnerImageZoom from 'react-inner-image-zoom';
import { ImageSlide, InnerImageGlobalStyle } from '../Styles';

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
            <ImageSlide>
              <InnerImageGlobalStyle />
              <InnerImageZoom src={image.url} alt="IKEA furniture" />

            </ImageSlide>
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
