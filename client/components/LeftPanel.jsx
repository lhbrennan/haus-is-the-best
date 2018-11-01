import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  padding-right: 3px;
  width: 100px;
`;

const Label = styled.div`
  text-align: right;
  font-size: 20px;
  padding: 8px;
  text-transform: capitalize;
`;

const LeftPanel = props => (
  <Wrapper>
    {props.instruments.map(instrument => {
      return <Label key={instrument}>{instrument}</Label>
    })}
  </Wrapper>
);

export default LeftPanel;