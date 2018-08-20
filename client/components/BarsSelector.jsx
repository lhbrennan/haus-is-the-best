import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ visible }) => {
    if (visible) { return '#6A0000'; }
    return 'cadetblue';
  }};
  margin: 5px; 
  border-radius: 10px;
  height: 50px;
  width: 50px;
`;

const BarsSelector = ({ bars, visibleBar, selectBar }) => {
  // create range from 1 to bars
  const range = Array.from(new Array(bars), (val, index) => index + 1);

  return (
    <div>
      {range.length > 1
      && range.map(elem => (
        <Button visible={elem === visibleBar} onClick={() => selectBar(elem)}>
          {elem}
        </Button>))
      }
    </div>
  );
};

export default BarsSelector;
