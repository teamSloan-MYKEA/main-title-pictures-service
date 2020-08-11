import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function RangeRevampButton({ handleClick }) {
  const Button = styled.button`
    display: block;
    margin: 1rem auto 0;
    -webkit-appearance: button;
    height: 2.5rem;
    padding: 0 1.25rem;
    font-size: .75rem;
    line-height: 1.33333;
    font-weight: 700;
    box-sizing: border-bow;
    transition-property: background-color;
    transition-timing-function: ease;
    cursor: pointer;
  `;
  const SpanButtonCopy = styled.span`

  `;
  const ButtonLabel = styled.span`

  `;
  return (
    <Button type="button" onClick={handleClick}>
      <SpanButtonCopy>
        <ButtonLabel>Show more images</ButtonLabel>
      </SpanButtonCopy>
    </Button>
  );
}
RangeRevampButton.propTypes = {
  handleClick: PropTypes.instanceOf(Function).isRequired,
};

export default RangeRevampButton;
