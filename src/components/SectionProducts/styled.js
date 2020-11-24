// Styled Components
import styled from "styled-components"

export const CardsContainer = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-auto-rows: 1fr;

    @media screen and (max-width: 760px) { 
        &{
            grid-template-columns: repeat(1, 1fr);
        }
    } 
`;
