import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RangeRevampMediaGrid from './RangeRevampMediaGrid';
import RangeRevampButton from './RangeRevampButton';

function RangeMediaGrid({
  images, handleClick, showModal, isCollapsed,
}) {
  const Grid = styled.div`
    position: relative;
    margin-bottom: 3.75rem;
  `;
  return (
    <Grid>
      <RangeRevampMediaGrid images={images} showModal={showModal} />
      <RangeRevampButton handleClick={handleClick} isCollapsed={isCollapsed} />
    </Grid>
  );
}
RangeMediaGrid.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.instanceOf(Function).isRequired,
  showModal: PropTypes.instanceOf(Function).isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};

export default RangeMediaGrid;
