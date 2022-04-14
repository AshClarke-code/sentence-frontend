import React from 'react';
import {CustomButton} from './../Button/button.component';
import { ButtonContainer } from './buttonGroup.styles';

export const ButtonGroup = () => (
    <ButtonContainer>
        <CustomButton inverted>Clear</CustomButton>
        <CustomButton>Save</CustomButton>
    </ButtonContainer>
  );

