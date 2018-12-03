import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 45px;
  width: 45px;
  border: 2px solid rgba(155,155,155,0.37);
  border-radius: 2px;
  font-size: 22px;
  margin: 0 10px 0 0;
  position: relative;

  cursor: pointer;
  outline: none;

  border-color: ${({ visible }) => (
    visible ? '#00b2ff' : 'rgba(155,155,155,0.37)'
  )};

  border-width: ${({ visible }) => (
    visible ? 3 : 1
  )};

&:after {
  ${({ visible }) => {
    if (visible) {
      return (`
        content: '';
        background-color: #00b2ff;
        width: calc(100% + 4px);
        height: 2px;
        display: block;
        position: absolute;
        left: -2px;
        bottom: -10px;
        `
      );
    }
  }};
}
`;

const BarSelectorButton = ({ visible, handleClick, children }) => (
  <Button visible={visible} onClick={handleClick}>{children}</Button>
);

export default BarSelectorButton;
