import styled from 'styled-components';

import {colors} from './../../utils/variables';



export const Nav = styled.nav`
    display: flex;
    gap: 3rem;
    padding: 0 1rem;
`;

export const NavItem = styled.a`
    text-decoration: none;
    color: ${colors.colorWhite};
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid ${colors.colorAccent};
        color: ${colors.colorAccent};
    }
`;