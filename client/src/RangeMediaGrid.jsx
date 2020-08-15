import React from 'react';
import PropTypes from 'prop-types';
import { RangeMediaGridStyle } from './Styles';
import RangeRevampMediaGrid from './RangeRevampMediaGrid';
import RangeRevampButton from './RangeRevampButton';

function RangeMediaGrid({
  images, handleClick, showModal, isCollapsed,
}) {
  return (
    <RangeMediaGridStyle>
      <RangeRevampMediaGrid images={images} showModal={showModal} />
      <RangeRevampButton handleClick={handleClick} isCollapsed={isCollapsed} />
    </RangeMediaGridStyle>
  );
}
RangeMediaGrid.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.instanceOf(Function).isRequired,
  showModal: PropTypes.instanceOf(Function).isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};

export default RangeMediaGrid;
