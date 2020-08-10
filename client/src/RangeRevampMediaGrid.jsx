import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MediaContainer from './MediaContainer.jsx';

function RangeRevampMediaGrid({ images }) {
  const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%
  `;
  return (
    <Div>
      {images.map((image) => <MediaContainer image={image.url} />)}
    </Div>
  );
}
RangeRevampMediaGrid.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
};

export default RangeRevampMediaGrid;
