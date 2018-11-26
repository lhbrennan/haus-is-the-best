import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  font-size: 22px;
  text-transform: uppercase;
  width: 100px;
`;

const PlaybackSetting = ({ label, children }) => (
  <Wrapper>
    <Label>{label}</Label>
    {children}
  </Wrapper>
);

export default PlaybackSetting;
