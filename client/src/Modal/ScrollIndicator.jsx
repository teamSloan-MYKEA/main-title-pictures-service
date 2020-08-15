import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ScrollIndicatorBarWrapper, ScrollIndicatorButton } from '../Styles';

function ScrollIndicator({ activeIndex, images }) {
  const percentage = activeIndex * 100;
  const scale = 1 / images.length;
  const ScrollIndicatorBar = styled.span`
    will-change: transform;
    background: #111;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform: scaleX(0.11) ${percentage};
    transform: ${() => `scaleX(${scale}) translateX(${percentage}%)`};
    transform - origin: 0 0;
    transition: 5s;
    display: block;
`;
  const clickTest = (e) => {
    const currentTargetRect = e.currentTarget.getBoundingClientRect();
    const eventOffsetX = e.pageX - currentTargetRect.left;
    console.log("offsetX:", eventOffsetX)
  };
  return (
    <ScrollIndicatorButton onClick={clickTest}>
      <ScrollIndicatorBarWrapper>
        <ScrollIndicatorBar />
      </ScrollIndicatorBarWrapper>
    </ScrollIndicatorButton>
  );
}
ScrollIndicator.propTypes = {
  activeIndex: PropTypes.instanceOf(Number).isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
};

export default ScrollIndicator;
