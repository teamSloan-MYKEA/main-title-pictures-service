import styled from 'styled-components';

// Image
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
const RangeRevampAspectRatioImage = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  display: block;
  box-sizing: border-box;
  background-color: red;
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
// Close Modal Icon
const CloseIcon = styled.svg`
height: 1.5rem;
width: 1.5rem;
cursor: pointer;
`;
// Left and Right Arrow Icons
const Arrow = styled.div`
  position: absolute;
  display: block;
  top: 50%;
`;
export {
  Img, RangeRevampAspectRatioImage, RangeRevampMediaGridMediaContainer, Button,
  SpanButtonCopy, ButtonLabel, CloseIcon, Arrow,
};
