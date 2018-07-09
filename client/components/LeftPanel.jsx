import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 3px;
  text-align: right;
`;

const LeftPanel = props => (
  <Div>
    {props.instruments.map(instrument => {
      return <div key={instrument}>{instrument}</div>
    })}
  </Div>
);

export default LeftPanel;