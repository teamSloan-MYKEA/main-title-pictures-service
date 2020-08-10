import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MediaContainer({ image }) {
  const Div = styled.div`
    width: 50%;
    position: relative;
    height: auto;
    box-sizing: border-box;
  `;
  const Img = styled.img`
    // object-fit: cover;
    // width: 100%;
    // height: 100%;
    // position: absolute;
    // left: 0;
    // top: 0;
    max-width: 100%;
  `;
  return (
    <Div>
      <Img className="range-revamp-image" src={image} alt="IKEA furniture" />
    </Div>
  );
}
MediaContainer.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
};

export default MediaContainer;
