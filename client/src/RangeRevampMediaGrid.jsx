import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from './Styles';
import MediaContainer from './MediaContainer';

function RangeRevampMediaGrid({ images, showModal }) {
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
