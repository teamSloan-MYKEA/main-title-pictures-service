import React from 'react';
import PropTypes from 'prop-types';
import { Button, SpanButtonCopy, ButtonLabel } from './Styles';

function RangeRevampButton({ handleClick, isCollapsed }) {
  return (
    <Button type="button" onClick={handleClick}>
      <SpanButtonCopy>
        <ButtonLabel>{isCollapsed ? 'Show more images' : 'Show less images'}</ButtonLabel>
      </SpanButtonCopy>
    </Button>
  );
}
RangeRevampButton.propTypes = {
  handleClick: PropTypes.instanceOf(Function).isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};

export default RangeRevampButton;
