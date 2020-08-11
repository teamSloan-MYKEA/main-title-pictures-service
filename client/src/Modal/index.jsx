import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ModalTitle from './Title';

function Modal({ show, images, onClose }) {
  const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  `;
  const ModalMain = styled.section`
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  if (!show) {
    return null;
  }
  return (
    <ModalContainer>
      <ModalMain>
        <ModalTitle close={onClose} />
        <div>Hello Modal!</div>
      </ModalMain>
    </ModalContainer>
  );
}
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
  onClose: PropTypes.instanceOf(Function).isRequired,
};

export default Modal;
