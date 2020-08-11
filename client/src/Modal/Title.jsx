import React from 'react';
import PropTypes from 'prop-types';

function ModalTitle({ close }) {
  return <button type="button" onClick={close}>Close Modal</button>;
}
ModalTitle.propTypes = {
  close: PropTypes.instanceOf(Function).isRequired,
};

export default ModalTitle;
