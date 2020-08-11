import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  render() {
    const { show } = this.props;
    if (!show) {
      return null;
    }
    return <div>Hello Modal!</div>;
  }
}
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
};
