import React from 'react';
import PropTypes from 'prop-types';
import { ScrollIndicatorBar, ScrollIndicatorBarWrapper, ScrollIndicatorButton } from '../Styles';

function ScrollIndicator() {
  return (
    <ScrollIndicatorButton>
      <ScrollIndicatorBarWrapper>
        <ScrollIndicatorBar></ScrollIndicatorBar>
      </ScrollIndicatorBarWrapper>
    </ScrollIndicatorButton>
  );
}

export default ScrollIndicator;
