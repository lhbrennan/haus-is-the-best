import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  height: 25px;
  margin: 0px 4px;
  color: #717171;

  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  text-transform: none;

  background: #FFFFFF;
  border: 2px solid #E1E1E1;
  border-radius: 3px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;

  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;


  box-shadow: 2px 5px 10px var(--color-smoke);

  &:hover {
    transition: all 150ms linear;

    opacity: .85;
  }

  &:active {
    transition: all 150ms linear;
    opacity: .75;
  }

  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
  }
`;

export default Button;
