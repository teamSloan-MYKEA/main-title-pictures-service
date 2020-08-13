import React from 'react';
import PropTypes from 'prop-types';
import { Img } from '../Styles';

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
            <Img src={image.url} alt="IKEA furniture" />
          </div>
        ))
      }
    </section>
  );
}
Slide.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  activeIndex: PropTypes.instanceOf(Number).isRequired,
  openImage: PropTypes.instanceOf(String).isRequired,
};

export default Slide;
