import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ playing }) => (playing ? '15px' : '15px 11px 15px 19px')};
  border: 1px solid #C4C4C4;
  border-radius: 50%;
`;

const PlayButton = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;

  border-style: solid;
  border-color: transparent transparent transparent #00B2FF;
  border-width: ${({ playing }) => (playing ? '0px 0px 0px 30px' : '15px 0px 15px 30px')};
  border-style: ${({ playing }) => (playing ? 'double' : 'solid')};

  outline: none;

  cursor: pointer;
`;

const Slider = styled.input`
  width: 110px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  // transform: rotate(-90deg);
`;

const PlayBox = ({
  togglePlaying,
  playing,
  overallVolume,
  updateOverallVolume,
}) => (
  <Wrapper playing={playing}>
    <PlayButton onClick={togglePlaying} playing={playing} />
    {/* <Slider
      type="range"
      min="0"
      max="1"
      step=".05"
      onChange={e => updateOverallVolume(e.target.value)}
      overallVolume={overallVolume}
    /> */}
  </Wrapper>
);

export default PlayBox;
