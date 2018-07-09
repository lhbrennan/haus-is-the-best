import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 200px;
  padding-right: 200px;
`;

// const Button = styled.button`
//   display:inline-block;
//   padding:0.35em 1.2em;
//   border:0.1em solid #FFFFFF;
//   margin:0 0.3em 0.3em 0;
//   border-radius:0.12em;
//   box-sizing: border-box;
//   text-decoration:none;
//   font-family:'Roboto',sans-serif;
//   font-weight:300;
//   color:#FFFFFF;
//   text-align:center;
//   transition: all 0.2s;
// `;

// a.button1:hover{
//  color:#000000;
//  background-color:#FFFFFF;
// }
// @media all and (max-width:30em){
//  a.button1{
//   display:block;
//   margin:0.4em auto;
//  }
// }

const MasterControl = props => (
  <Panel>
    <button onClick={props.play}>Play</button>
    <div>
      <label>BPM</label>
      <input type="text" onChange={props.updateBpm} defaultValue="120"/>
    </div>
    <div>
      <label>Swing</label>
      <input type="text" onChange={props.updateSwing} defaultValue="3"/>
    </div>
    <button>Reset</button>
  </Panel>
);

export default MasterControl;