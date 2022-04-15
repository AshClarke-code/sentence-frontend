import styled, {css} from 'styled-components';
import {colors} from './../../utils/variables';

const defaultStyles = css`
    color: ${colors.colorWhite};
    background-color: ${colors.colorAccent};
`;

const invertedStyles = css`
    color: ${colors.colorAccent};
    background-color: ${colors.colorWhite};
`;


const getStyles = props => {
    return props.inverted ? invertedStyles : defaultStyles;
}


export const Button = styled.button`
    ${getStyles}
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    border: none;
    font-weight: 600;
    width: 15rem;
    height: 4rem;
    border-radius: 100px;
    font-size: 1.4rem;
    letter-spacing: 2px;
    box-shadow: 1px 1px 10px 0px ${colors.colorAccent};
    transform: translateY(0);
    

    

    &:hover {
        color: ${colors.colorWhite};
        background-color: ${colors.colorBlack};
        border 2px solid ${colors.colorAccent};
        transform: translateY(-3px);
    }

    &:active {
        color: ${colors.colorWhite};
        background-color: ${colors.colorBlack};
        border 2px solid ${colors.colorAccent};
        transform: translateY(3px);
    }
`;