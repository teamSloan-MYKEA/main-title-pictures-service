import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function RightArrow({ goToNextSlide }) {
  const element = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <div onClick={goToNextSlide}>
      <div>{element}</div>
    </div>
  );
}
RightArrow.propTypes = {
  goToNextSlide: PropTypes.instanceOf(Function).isRequired,
};

export default RightArrow;
