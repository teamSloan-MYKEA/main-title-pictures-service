import React from 'react';
import PropTypes from 'prop-types';
import { ScrollIndicatorBar, ScrollIndicatorBarWrapper, ScrollIndicatorButton } from '../Styles';

function ScrollIndicator({ activeIndex, slideDirection }) {
  return (
    <ScrollIndicatorButton>
      <ScrollIndicatorBarWrapper>
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
