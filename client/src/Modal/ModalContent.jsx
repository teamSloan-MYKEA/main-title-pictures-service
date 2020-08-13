import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';

function ModalContent({ images, openImage }) {
  return (
    <div>
      {/* <LeftArrow /> */}
      <Slider images={images} openImage={openImage} />
      {/* <RightArrow /> */}
      {/* <ScrollIndicator /> */}
    </div>
  );
}
ModalContent.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  openImage: PropTypes.instanceOf(String).isRequired,
};

export default ModalContent;
