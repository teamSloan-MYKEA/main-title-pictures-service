import React from 'react';
import PropTypes from 'prop-types';
import { Img, RangeRevampAspectRatioImage, RangeRevampMediaGridMediaContainer } from './Styles';

function MediaContainer({ image, showModal }) {
  return (
    <RangeRevampMediaGridMediaContainer>
      <RangeRevampAspectRatioImage>
        <Img className="range-revamp-image" src={image} alt="IKEA furniture" onClick={(image) => showModal(image)} />
      </RangeRevampAspectRatioImage>
    </RangeRevampMediaGridMediaContainer>
  );
}
MediaContainer.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
  showModal: PropTypes.instanceOf(Function).isRequired,
};

export default MediaContainer;
