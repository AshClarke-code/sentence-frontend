import React from 'react';
import {InputContainer, CustomInput, Label} from './input.styles';

export const Input = ({label, handleChange, ...props}) => (
    <InputContainer>
        <Label>{label}</Label>
        <CustomInput onChange={handleChange} {...props}/>
    </InputContainer>
)

