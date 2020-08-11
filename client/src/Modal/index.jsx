import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalTitle from './Title';

function Modal({ show, images }) {
  if (!show) {
    return null;
  }
  return (
    <div>
      <ModalTitle />
      <div>Hello Modal!</div>
    </div>
  );
}
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
};

export default Modal;
