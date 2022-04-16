import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {colors} from './../../utils/variables';

export const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;


export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;


export const LinkButton = styled(Link)`
    color: ${colors.colorAccent};
    text-decoration: none;

    &:hover {
        color: ${colors.colorWhite};
    }
`;
