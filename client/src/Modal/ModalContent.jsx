import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';

function ModalContent({ images }) {
  return (
    <div>
      {/* <LeftArrow /> */}
      <Slider images={images} />
      {/* <RightArrow /> */}
      {/* <ScrollIndicator /> */}
    </div>
  );
}
ModalContent.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
};

export default ModalContent;
