import React from 'react';
import PropTypes from 'prop-types';

function MediaContainer({ image }) {
  return (
    <div>
      <img src={image} alt="IKEA furniture">
    </div>
  );
}
MediaContainer.propTypes = {
        image: PropTypes.instanceOf(Object).isRequired,
};

export default MediaContainer;
