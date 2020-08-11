import React from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

function ModalContent({ images }) {
  return (
    <div>
      <LeftArrow />
      <div>Hello from ModalContent</div>
      <RightArrow />
    </div>
  );
}

export default ModalContent;
