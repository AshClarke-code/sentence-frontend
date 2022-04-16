import styled from 'styled-components';
import {colors} from './../../utils/variables';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Card = styled.div`
    width: 30%;
    background-color: ${colors.colorBlack};
    border: 2px solid ${colors.colorAccent};
    box-shadow: 1px 1px 10px 0px ${colors.colorAccent};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 2rem;

    @media only screen and (max-width: 1000px) {
        width: 40%;
      }

    @media only screen and (max-width: 800px) {
        width: 50%;
    }
    @media only screen and (max-width: 500px) {
        width: 60%;
    }
    @media only screen and (max-width: 400px) {
        width: 70%;
    }
`;
