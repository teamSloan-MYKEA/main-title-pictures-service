import styled from 'styled-components';

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

export { Img, RangeRevampAspectRatioImage, RangeRevampMediaGridMediaContainer };
