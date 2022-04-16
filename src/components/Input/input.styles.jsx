import styled from 'styled-components';
import {colors} from './../../utils/variables';

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const CustomInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid ${colors.colorAccent};
    background-color: transparent;
    padding: 1rem;
    outline: none;
    font-family: 'Poppins';
    color: ${colors.colorWhite};
`;


export const Label = styled.label`
    width: 100%;
    padding: 1rem;
    font-weight: 200;

`;


