import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ScrollIndicatorBarWrapper, ScrollIndicatorButton } from '../Styles';

function ScrollIndicator({ activeIndex, images, goToSlide }) {
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
    transform: ${() => `scaleX(${scale}) translateX(${percentage}%)`};
    transform - origin: 0 0;
    transition: 5s;
    display: block;
`;
  // Returns which button index to click
  const clickSlide = (e) => {
    const currentTargetRect = e.currentTarget.getBoundingClientRect();
    const eventOffsetX = e.pageX - currentTargetRect.left;
    const buttonWidth = (currentTargetRect.width / images.length);
    const clickPosition = eventOffsetX;
    let targetButtonIndex = 0;
    let counter = 0;
    const recurse = (click) => {
      if (click < buttonWidth) {
        targetButtonIndex = counter;
        return;
      }
      counter += 1;
      recurse(click - buttonWidth);
    };
    recurse(clickPosition);
    return targetButtonIndex;
  };
  return (
    <ScrollIndicatorButton onClick={(e) => { goToSlide(clickSlide(e)); }}>
      <ScrollIndicatorBarWrapper>
        <ScrollIndicatorBar />
      </ScrollIndicatorBarWrapper>
    </ScrollIndicatorButton>
  );
}
ScrollIndicator.propTypes = {
  activeIndex: PropTypes.instanceOf(Number).isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
  goToSlide: PropTypes.instanceOf(Function).isRequired,
};

export default ScrollIndicator;
