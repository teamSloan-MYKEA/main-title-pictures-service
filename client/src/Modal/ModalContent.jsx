import React from 'react';
import PropTypes from 'prop-types';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Slider from './Slider';
import ScrollIndicator from './ScrollIndicator';

function ModalContent({ images }) {
  return (
    <div>
      {/* <LeftArrow /> */}
      <Slider images={images} />
      {/* <RightArrow /> */}
      <ScrollIndicator />
    </div>
  );
}
ModalContent.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
};

export default ModalContent;
