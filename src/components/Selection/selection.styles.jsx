import styled from 'styled-components';
import {Link} from "react-router-dom";
import {colors} from './../../utils/variables';


export const SelectionContainer = styled.div`
    height: 45vh;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
`;

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
`;

export const NavItem = styled(Link)`
    text-decoration: none;
    color: ${colors.colorWhite};
    cursor: pointer;
    transform: translateY(0);
    font-size: 2rem;


    &:hover {
        transform: translateY(-3px);
        color: ${colors.colorAccent};
    }
`;