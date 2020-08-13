import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landing: landingData
    };
  }

  render() {
    return (
      <section>
        Hello from Slide
      </section>
    );
  }
}
Slide.propTypes = {
};

export default Slide;
