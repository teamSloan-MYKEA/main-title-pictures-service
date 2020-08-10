import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function RangeRevampButton({ handleClick }) {
  const Button = styled.button`
    display: block;
    margin: 1rem auto 0;
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
