import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import ModalTitle from './Title';
import ModalContent from './ModalContent';

function Modal({ show, images, onClose }) {
  const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    background: rgba(0,0,0,0.6);
  `;
  const ModalMain = styled.section`
    position: fixed;
    background: white;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  const GlobalStyle = createGlobalStyle`
    body {
      overflow: hidden;
    }
  `;
  if (!show) {
    return null;
  }
  return (
    <ModalContainer>
      <GlobalStyle />
      <ModalMain>
        <ModalTitle close={onClose} />
        <ModalContent images={images} />
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
