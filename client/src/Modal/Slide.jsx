import React from 'react';
import PropTypes from 'prop-types';
import { Img } from '../Styles';

function Slide({ images, activeIndex, openImage }) {
  console.log("image from slide:", openImage);
  let openImageIndex = 0;
  images.forEach((image, index) => {
    if (image.url === openImage) {
      openImageIndex = index;
    }
    return 0;
  });
  console.log("image index:", openImageIndex);
  return (
    // onOpen var when first clicked, then set to false.
    <section>
      {
        images.map((image, index) => (
          /* If onOpen, take clicked image index and set className to active
           and set onOpen to false, else:
          */
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
