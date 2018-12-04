import React from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button';

const Icon = styled.span`
  margin: 0 5px 0 0;
  width: 17px;
`;

const TogglePadSound = ({ handleClick, padSound }) => {
  const iconClass = padSound ? 'fas fa-volume-up' : 'fas fa-volume-mute';

  return (
    <Button type="button" onClick={handleClick}>
      <Icon className={iconClass} />Pad Sound
    </Button>
  );
};

export default TogglePadSound;
