import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function LeftArrow() {
  const element = <FontAwesomeIcon icon={faArrowLeft} />;
  return (
    <div>
      <FontAwesomeIcon icon="check-square" />
      <div>{element}</div>
    </div>
  );
}

export default LeftArrow;
