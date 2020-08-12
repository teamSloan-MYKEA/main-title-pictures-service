import React from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import ScrollIndicator from './ScrollIndicator';

function ModalContent({ images }) {
  return (
    <div>
      <LeftArrow />
      <div>Hello from ModalContent</div>
      <RightArrow />
      <ScrollIndicator />
    </div>
  );
}

export default ModalContent;
