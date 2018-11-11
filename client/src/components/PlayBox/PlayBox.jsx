import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 15px;
`;

const PlayButton = styled.button`
  width: 50px;
  height: 50px;
  border-style: solid;
  box-sizing: border-box;
  border-color: transparent transparent transparent #FFEB95;
  padding: 0;
  background-color: #011627;
  border-width: ${({ playing }) => (playing ? '0px 0px 0px 50px' : '25px 0px 25px 50px')};
  border-style: ${({ playing }) => (playing ? 'double' : 'solid')};
  transition: 100ms all ease;
  will-change: border-width;
`;

// const PlayButton = styled.button`
//   // position: relative;
//   // vertical-align: top;
//   Width: 80px;
//   height: 80px;
//   // padding: 40px;
//   font-size: 22px;
//   color: white;
//   text-align: center;
//   text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
//   background: #34495e;
//   border: 0;
//   border-bottom: 2px solid #263849;
//   border-radius: 5px;
//   cursor: pointer;
//   -webkit-box-shadow: inset 0 -2px #263849;
//   box-shadow: inset 0 -2px #263849;
// `;

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
  <Wrapper>
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
