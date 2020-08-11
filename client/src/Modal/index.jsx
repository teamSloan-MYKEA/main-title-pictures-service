import React from 'react';
import PropTypes from 'prop-types';
import ModalTitle from './Title';

function Modal({ show, images, onClose }) {
  if (!show) {
    return null;
  }
  return (
    <div>
      <ModalTitle close={onClose} />
      <div>Hello Modal!</div>
    </div>
  );
}
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
  onClose: PropTypes.instanceOf(Function).isRequired,
};

export default Modal;
