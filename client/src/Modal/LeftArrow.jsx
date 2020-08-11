import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa-arrow - left } from '@fortawesome/free-solid-svg-icons';


function LeftArrow() {
  return (
    <div onClick={this.props.goToPreviousSlide}>
      <i></i>
    </div>
  );
}

export default LeftArrow;
