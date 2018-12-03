import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 25px 0 0;
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
  text-transform: uppercase;
  margin: 0 10px 0 0;
`;

const PlaybackSetting = ({ label, children }) => (
  <Wrapper>
    <Label>{label}</Label>
    {children}
  </Wrapper>
);

export default PlaybackSetting;
