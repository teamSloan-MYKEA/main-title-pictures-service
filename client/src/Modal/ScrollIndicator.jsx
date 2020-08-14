import React from 'react';
import PropTypes from 'prop-types';
import { ScrollIndicatorBar, ScrollIndicatorBarWrapper, ScrollIndicatorButton } from '../Styles';

function ScrollIndicator({ activeIndex }) {
  return (
    <ScrollIndicatorButton>
      <ScrollIndicatorBarWrapper>
        <ScrollIndicatorBar ></ScrollIndicatorBar>
      </ScrollIndicatorBarWrapper>
    </ScrollIndicatorButton>
  );
}
ScrollIndicator.propTypes = {
  activeIndex: PropTypes.instanceOf(Number).isRequired,
};

export default ScrollIndicator;
