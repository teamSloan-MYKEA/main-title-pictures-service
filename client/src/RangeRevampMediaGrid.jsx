import React from 'react';
import PropTypes from 'prop-types';
import MediaContainer from './MediaContainer.jsx';

function RangeRevampMediaGrid({ images }) {
  return (
    <div>
      <MediaContainer />
      {images.map((image) => {
        return <MediaContainer image={image} />;
      })}
    </div>
  );
}
RangeRevampMediaGrid.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
};

export default RangeRevampMediaGrid;
