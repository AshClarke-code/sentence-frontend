import styled from 'styled-components';
import {colors} from './../../utils/variables';


export const SelectionContainer = styled.div`
    height: 45vh;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: center;
`;

export const NavItem = styled.a`
    text-decoration: none;
    color: ${colors.colorWhite};
    cursor: pointer;
    transform: translateY(0);


    &:hover {
        transform: translateY(-3px);
        color: ${colors.colorAccent};
    }
`;