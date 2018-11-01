import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ visible }) => {
    if (visible) { return 'orange'; }
    return 'grey';
  }};
  margin: 5px; 
  border-radius: 10px;
  height: 40px;
  width: 40px;
`;

const BarsSelector = ({ bars, visibleBar, selectBar }) => {
  // create range from 1 to bars
  const range = Array.from(new Array(bars), (_, index) => index + 1);

  return (
    <div>
      {range.length > 1
      && range.map(elem => (
        <Button key={elem} visible={elem === visibleBar} onClick={() => selectBar(elem)}>
          {elem}
        </Button>))
      }
    </div>
  );
};

export default BarsSelector;
