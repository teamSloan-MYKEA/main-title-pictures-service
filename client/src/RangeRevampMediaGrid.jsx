import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MediaContainer from './MediaContainer';

function RangeRevampMediaGrid({ images, showModal }) {
  const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -.625rem;
    margin-right: -.625rem;
    background-color: green;
  `;
  return (
    <Grid>
      {images.map((image) => <MediaContainer image={image.url} showModal={showModal} />)}
    </Grid>
  );
}
RangeRevampMediaGrid.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  showModal: PropTypes.instanceOf(Function).isRequired,
};

export default RangeRevampMediaGrid;
