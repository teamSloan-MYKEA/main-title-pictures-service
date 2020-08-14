import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CloseIcon } from '../Styles';

function ModalTitle({ close }) {
  const element = <FontAwesomeIcon icon={faTimes} />;
  return (
    <CloseIcon onClick={close}>
      <svg>{element}</svg>
    </CloseIcon>
  );
}
ModalTitle.propTypes = {
  close: PropTypes.instanceOf(Function).isRequired,
};

export default ModalTitle;
