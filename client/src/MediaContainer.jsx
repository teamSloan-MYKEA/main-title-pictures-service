import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MediaContainer({ image }) {
  const RangeRevampMediaGridMediaContainer = styled.div`
    flex: none;
    margin-left: .625rem;
    margin-right: .625rem;
    width: calc(50% - 1.25rem);
    margin-bottom: 1.25rem;
  `;
  const RangeRevampAspectRatioImage = styled.div`
    width: 100%;
    position: relative;
    height: auto;
    display: block;
    box-sizing: border-box;
    background-color: red;
  `;
  const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    // position: absolute;
    // left: 0;
    // top: 0;
    max-width: 100%;
    cursor: pointer;
  `;
  return (
    <RangeRevampMediaGridMediaContainer>
      <RangeRevampAspectRatioImage>
        <Img className="range-revamp-image" src={image} alt="IKEA furniture" />
      </RangeRevampAspectRatioImage>
    </RangeRevampMediaGridMediaContainer>
  );
}
MediaContainer.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
};

export default MediaContainer;
