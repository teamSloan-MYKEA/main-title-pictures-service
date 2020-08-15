import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ScrollIndicatorBar, ScrollIndicatorBarWrapper, ScrollIndicatorButton } from '../Styles';

function ScrollIndicator({ activeIndex, slideDirection }) {

  const ScrollIndicatorBar = styled.span`
  will-change: transform;
  background: #111;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform: scaleX(0.11) translateX(200%);
  transform-origin: 0 0;
  transition: 5s;
  display: block;
`;
  return (
    <ScrollIndicatorButton>
      <ScrollIndicatorBarWrapper>
        {/* <ScrollIndicatorBar /> */}
        <ScrollIndicatorBar />
      </ScrollIndicatorBarWrapper>
    </ScrollIndicatorButton>
  );
}
ScrollIndicator.propTypes = {
  activeIndex: PropTypes.instanceOf(Number).isRequired,
  slideDirection: PropTypes.instanceOf(String).isRequired,
};

export default ScrollIndicator;
