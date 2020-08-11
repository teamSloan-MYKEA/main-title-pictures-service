import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function RightArrow() {
  const element = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <div>
      <div>{element}</div>
    </div>
  );
}

export default RightArrow;
