import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MediaContainer({ image }) {
  const Div = styled.div`
    width: 100%;
    position: relative;
    height: auto;
    display: block;
    box-sizing: border-box;
  `;
  const Img = styled.img`
    object-fit: cover;
    width: 10%;
    height: 10%;
    // position: absolute;
    // left: 0;
    // top: 0;
    // max-width: 100%;
  `;
  return (
    <div>
      <Div>
        <Img className="range-revamp-image" src={image} alt="IKEA furniture" />
      </Div>

    </div>
  );
}
MediaContainer.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
};

export default MediaContainer;
