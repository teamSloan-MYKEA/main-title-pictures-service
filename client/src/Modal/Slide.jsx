import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Img } from '../Styles';

function Slide({ images, activeIndex }) {
  // constructor({ images, activeIndex }) {
  //   super(images, activeIndex);
  //   this.state = {
  //     images,
  //     activeIndex,
  //   };
  // }

  console.log('from Slide. activeIndex is:', activeIndex);
  return (
    // const { images } = this.state;
    // let { activeIndex } = this.state;
    // return (
    <section>
      {
        images.map((image, i) => (
          <div
            className={
              i === activeIndex ? 'active' : 'inactive'
            }
          >
            <Img src={image.url} alt="IKEA furniture" />
          </div>
        ))
      }
    </section>
    // );
  )
}
Slide.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  activeIndex: PropTypes.instanceOf(Number).isRequired,
};

export default Slide;
