import React from 'react';
import PropTypes from 'prop-types';
import InnerImageZoom from 'react-inner-image-zoom';
import { ImageSlideRight, ImageSlideLeft, ImageSlideUp, InnerImageGlobalStyle } from '../Styles';

function Slide({ images, activeIndex, slideDirection }) {
  return (
    <section>
      {
        images.map((image, index) => (
          <div
            className={
              index === activeIndex ? 'active' : 'inactive'
            }
          >
            {(() => {
              switch (slideDirection) {
                case 'left': return (
                  <ImageSlideRight>
                    <InnerImageGlobalStyle />
                    <InnerImageZoom src={image.url} alt="IKEA furniture" />
                  </ImageSlideRight>
                );
                case 'right': return (
                  <ImageSlideLeft>
                    <InnerImageGlobalStyle />
                    <InnerImageZoom src={image.url} alt="IKEA furniture" />
                  </ImageSlideLeft>
                );
                case 'up': return (
                  <ImageSlideUp>
                    <InnerImageGlobalStyle />
                    <InnerImageZoom src={image.url} alt="IKEA furniture" />
                  </ImageSlideUp>
                );
                default: return (
                  <div>
                    <InnerImageGlobalStyle />
                    <InnerImageZoom src={image.url} alt="IKEA furniture" />
                  </div>
                );
              }
            })()}
          </div>
        ))
      }
    </section>
  );
}
Slide.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  activeIndex: PropTypes.instanceOf(Number).isRequired,
  slideDirection: PropTypes.instanceOf(String).isRequired,
};

export default Slide;
