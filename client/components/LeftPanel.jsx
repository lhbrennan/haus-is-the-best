import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 3px;
`;

const Label = styled.div`
  text-align: right;
  font-size: 20px;
  padding: 8px;
  text-transform: capitalize;
`;

const LeftPanel = props => (
  <Div>
    {props.instruments.map(instrument => {
      return <Label key={instrument}>{instrument}</Label>
    })}
  </Div>
);

export default LeftPanel;