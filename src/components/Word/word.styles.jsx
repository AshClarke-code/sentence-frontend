import styled from 'styled-components';
import {colors} from './../../utils/variables';



export const ListItem = styled.li`
    cursor: pointer;
    font-weight: 200;
    font-size: 1.4rem;
    letter-spacing: 2px;
    text-align: center;
    border: 1px solid ${colors.colorBlack};

    &:hover {
        color: ${colors.colorAccent};
        border: 1px solid ${colors.colorAccent};
    }
`;