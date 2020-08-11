import React from 'react';
import PropTypes from 'prop-types';
import RangeRevampMediaGrid from './RangeRevampMediaGrid';
import RangeRevampButton from './RangeRevampButton';

function RangeMediaGrid({ images, handleClick }) {
  return (
    <div>
      <RangeRevampMediaGrid images={images} />
      <RangeRevampButton handleClick={handleClick} />
    </div>
  );
}
RangeMediaGrid.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.instanceOf(Function).isRequired,
};

export default RangeMediaGrid;
