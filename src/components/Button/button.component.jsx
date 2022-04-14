import React from 'react';
import {Button} from './button.styles';

export const CustomButton = ({handleClick, children, ...props}) =>  (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );