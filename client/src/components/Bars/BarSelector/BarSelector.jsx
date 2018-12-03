import React from 'react';
import styled from 'styled-components';

import BarSelectorButton from './BarSelectorButton/BarSelectorButton';
import AddBar from './AddBar';

const Wrapper = styled.div`
  display: flex;

  width: 495px;
`;

const BarsSelector = ({ bars, visibleBar, selectBar }) => {
  // create range from 1 to bars
  const range = Array.from(new Array(bars), (_, index) => index + 1);

  return (
    <Wrapper>
      {range.map(elem => (
        <BarSelectorButton
          key={elem}
          visible={elem === visibleBar}
          handleClick={() => selectBar(elem)}
        >
          {elem}
        </BarSelectorButton>))
      }
      <AddBar />
    </Wrapper>
  );
};

export default BarsSelector;
