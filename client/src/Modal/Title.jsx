import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function ModalTitle({ close }) {
  const CloseIcon = styled.svg`
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
  `;
  const element = <FontAwesomeIcon icon={faTimes} />;
  return (
    <CloseIcon>
      <svg onClick={close}>{element}</svg>
    </CloseIcon>
  );
}
ModalTitle.propTypes = {
  close: PropTypes.instanceOf(Function).isRequired,
};

export default ModalTitle;
