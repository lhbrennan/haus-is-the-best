import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex-basis: 410px;
  justify-content: space-around;
  padding-right: 3px;
  width: 120px;
  margin-top: 163.681px;
`;

const Label = styled.div`
  text-align: left;
  font-size: 18px;
  padding: 8px;
  text-transform: capitalize;
  color: #FFEB95;
`;

const LeftPanel = ({ instruments }) => (
  <Wrapper>
    {instruments.map(instrument => (
      <Label key={instrument}>
        {instrument.toUpperCase()}
      </Label>
    ))}
  </Wrapper>
);

export default LeftPanel;
