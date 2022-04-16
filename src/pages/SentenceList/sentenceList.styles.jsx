import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {colors} from './../../utils/variables';

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;
    gap: 3rem;
`;

export const HeadingContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`;

export const Heading = styled.h2`
    font-size: 3rem;
    color: ${colors.colorAccent};
    letter-spacing: 3px;
    font-weight: 500;

    span {
        color: ${colors.colorWhite};
        font-weight: 300;
    }

`;

export const LinkBack = styled(Link)`
    color: ${colors.colorAccent};
    text-decoration: none;
    font-weight: 200;
    padding: .5rem;

`;

export const List = styled.ul`

`;


export const ListItem = styled.li`
    font-weight: 200;
    padding: .5rem;
`;