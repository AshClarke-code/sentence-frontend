import styled from 'styled-components';
import {colors} from './../../utils/variables';


export const InputContainer = styled.div`
    width: 70%;
    border-bottom: 1px solid ${colors.colorAccent};
`;

export const Input = styled.input`
    width: 100%;
    font-size: 2rem;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${colors.colorWhite};
    padding: 1rem 1rem;
    text-align: center;
`;