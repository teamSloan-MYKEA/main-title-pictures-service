import React from 'react';

function LeftArrow() {
  return (
    <div onClick={this.props.goToPreviousSlide}>
      <i></i>
    </div>
  );
}

export default LeftArrow;
