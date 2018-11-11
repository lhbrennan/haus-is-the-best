import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  color: #82b1ff;
`;

const PlayButton = styled.button`
  // position: relative;
  // vertical-align: top;
  Width: 80px;
  height: 80px;
  // padding: 40px;
  font-size: 22px;
  color: white;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: #34495e;
  border: 0;
  border-bottom: 2px solid #263849;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #263849;
  box-shadow: inset 0 -2px #263849;
`;

const Slider = styled.input`
  width: 110px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  // transform: rotate(-90deg);
`;

const Label = styled.label`
  font-size: 22px;
  margin-right: 7px;  
`;

const PlayBox = ({
  togglePlaying,
  playing,
  overallVolume,
  updateOverallVolume,
}) => (
  <Wrapper>
    <PlayButton onClick={togglePlaying}>
      {playing ? 'Stop' : 'Play'}
    </PlayButton>
    <Slider
      type="range"
      min="0"
      max="1"
      step=".05"
      onChange={e => updateOverallVolume(e.target.value)}
      overallVolume={overallVolume}
    />
  </Wrapper>
);

export default PlayBox;
