import React from 'react';
import PropTypes from 'prop-types';
import RangeRevampMediaGrid from './RangeRevampMediaGrid.jsx';

function RangeMediaGrid({ images }) {
  return <RangeRevampMediaGrid images={images} />;
}
RangeMediaGrid.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
};

export default RangeMediaGrid;
