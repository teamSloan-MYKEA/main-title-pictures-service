import styled, { createGlobalStyle, keyframes } from 'styled-components';

// Main Item Grid Images
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  // position: absolute;
  // left: 0;
  // top: 0;
  max-width: 100%;
  cursor: pointer;
  `;
const RangeMediaGridStyle = styled.div`
position: relative;
margin-bottom: 3.75rem;
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -.625rem;
  margin-right: -.625rem;
`;
const RangeRevampAspectRatioImage = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  display: block;
  box-sizing: border-box;
`;
const RangeRevampMediaGridMediaContainer = styled.div`
  flex: none;
  margin-left: .625rem;
  margin-right: .625rem;
  width: calc(50% - 1.25rem);
  margin-bottom: 1.25rem;
`;
// Show more images Button
const Button = styled.button`
  display: block;
  margin: 1rem auto 0;
  -webkit-appearance: button;
  height: 2.5rem;
  padding: 0 1.25rem;
  font-size: .75rem;
  line-height: 1.33333;
  font-weight: 700;
  box-sizing: border-bow;
  transition-property: background-color;
  transition-timing-function: ease;
  cursor: pointer;
  border-radius: 40px;
  `;
const SpanButtonCopy = styled.span`
  display: flex;
  opacity: 1;
  transform: translateY(0);
  transition-property: opacity, transform, -webkit-transform;
  transition-timing-function: ease;
`;
const ButtonLabel = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
// Modal Container
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background: rgba(0,0,0,0.6);
  `;
const GlobalModalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }

  .inactive {
    display: none;
  }

  .active {
    display: block;
  }
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
const ModalTitleContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 1.5625rem 2.3125rem;
`;
// Close Modal Icon
const CloseIcon = styled.svg`
height: 1rem;
width: 1rem;
cursor: pointer;
`;
// Carousel Images NO LONGER USED. Moved to InnerImageGlobalStyle:
const CarouselImage = styled.img`
  max-height: 75vh;
  max-width: 100%;
  width: auto;
  height: auto;
  cursor: zoom-in;
`;
// Carousel Content
const CarouselContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// Carousel Arrows
const CarouselArrow = styled.div`
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  ${CarouselContent}:hover & {
    opacity: 1;
  }
`;
// Carousel Scroll Bar
// Scroll Indicator Bar found inline.
const ScrollIndicatorBarWrapper = styled.span`
  width: 100%;
  background: #dfdfdf;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  height: .125rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: block;
`;
const ScrollIndicatorButton = styled.button`
  height: 1.375rem;
  position: relative;
  width: 100%;
  outline: none;
  border: 0;
  padding: 0;
  background: transparent;
  display: block;
`;
// Carousel Animations
const SlideToRight = keyframes`
  from {
    transform: translateX(-900px);
  }
  to {
    transform: translateX(0);
  }
`;
const SlideToLeft = keyframes`
  from {
    transform: translateX(900px);
  }
  to {
    transform: translateX(0);
  }
`;
const SlideToTop = keyframes`
  from {
    transform: translateY(900px);
  }
  to {
    transform: translateX(0);
  }
`;
const animationSpeed = '0.3s ease forwards';
const ImageSlideRight = styled.div`
  animation: ${SlideToRight} ${animationSpeed};
`;
const ImageSlideLeft = styled.div`
  animation: ${SlideToLeft} ${animationSpeed};
`;
const ImageSlideUp = styled.div`
  animation: ${SlideToTop} ${animationSpeed}
`;
// Inner Image Zoom
const InnerImageGlobalStyle = createGlobalStyle`
.iiz {
  margin: 0;
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: zoom-in;
}

.iiz--drag .iiz__zoom-img--visible {
  cursor: grab;
}

.iiz__img {
  max-width: 100%;
  max-height: 75vh;
  height: auto;
  display: block;
  pointer-events: none;
  visibility: visible;
  opacity: 1;
}

.iiz__img--invisible {
  visibility: hidden;
  opacity: 0;
}

.iiz__zoom-img {
  width: auto !important;
  max-width: none !important;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  display: block;
}

.iiz__zoom-img--visible {
  visibility: visible;
  opacity: 1;
  cursor: zoom-out;
}

.iiz__zoom-portal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
}

.iiz__btn {
  background: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  padding: 0;
  position: absolute;
  text-decoration: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-appearance: none;
  appearance: none;
}

.iiz__btn:before {
  content: " ";
  background-position: center;
  background-repeat: no-repeat;
  display: block;
}

// Makes a transparent magnifying glass hint — IKEA doesn't have this:
// .iiz__hint {
//   bottom: 10px;
//   right: 10px;
//   pointer-events: none;
// }

// .iiz__hint:before {
//   content: " ";
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9 19.9'%3E%3Cpath d='M13.9 7.4C13.9 3.8 11 .9 7.4.9S.9 3.8.9 7.4s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5zm5.3 12.5l-6.7-7.2c-1.4 1.3-3.2 2.1-5.1 2.1-4.1 0-7.4-3.3-7.4-7.4S3.3 0 7.4 0s7.4 3.3 7.4 7.4c0 1.7-.6 3.4-1.7 4.7l6.8 7.2-.7.6z' fill='%23000222'/%3E%3C/svg%3E");
//   width: 20px;
//   height: 20px;
// }

.iiz__close {
  top: 10px;
  right: 10px;
  visibility: hidden;
  opacity: 0;
}

.iiz__close--visible {
  visibility: visible;
  opacity: 1;
}

.iiz__close::before {
  content: " ";
  width: 29px;
  height: 29px;
  background-image: linear-gradient(#222, #222), linear-gradient(#222, #222);
  background-size: 100% 1px, 1px 100%;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
`;

export {
  Img, RangeMediaGridStyle, Grid,
  RangeRevampAspectRatioImage, RangeRevampMediaGridMediaContainer, Button,
  SpanButtonCopy, ButtonLabel, ModalContainer, GlobalModalStyle,
  ModalMain, ModalTitleContainer, CloseIcon, CarouselImage, CarouselArrow,
  ScrollIndicatorBarWrapper, ScrollIndicatorButton,
  CarouselContent, ImageSlideRight, ImageSlideLeft, ImageSlideUp, InnerImageGlobalStyle,
};
