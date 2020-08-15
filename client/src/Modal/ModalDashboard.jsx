import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalContainer, GlobalModalStyle, ModalMain, ModalTitleContainer,
} from '../Styles';
import ModalTitle from './Title';
import Slider from './Slider';

function Modal({
  show, images, onClose, openImage,
}) {
  if (!show) {
    return null;
  }
  return (
    <ModalContainer>
      <GlobalModalStyle />
      <ModalMain>
        <ModalTitleContainer>
          <ModalTitle close={onClose} />
        </ModalTitleContainer>
        <Slider images={images} openImage={openImage} close={onClose} />
      </ModalMain>
    </ModalContainer>
  );
}
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
  onClose: PropTypes.instanceOf(Function).isRequired,
  openImage: PropTypes.instanceOf(String).isRequired,
};

export default Modal;
