import styled from 'styled-components';



export const ListContainer = styled.ul`
    width: 100%;
    max-height: 80%;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(auto-fit, 5rem);
    gap: 2rem;
    list-style: none;

`;