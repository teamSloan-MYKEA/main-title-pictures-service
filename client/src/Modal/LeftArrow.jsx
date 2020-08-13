import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function LeftArrow({ goToPreviousSlide }) {
  const element = <FontAwesomeIcon icon={faArrowLeft} />;
  return (
    <div>
      <div onClick={goToPreviousSlide}>{element}</div>
    </div>
  );
}
LeftArrow.propTypes = {
  goToPreviousSlide: PropTypes.instanceOf(Function).isRequired,
};

export default LeftArrow;
