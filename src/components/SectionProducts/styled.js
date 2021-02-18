// Styled Components
import styled from "styled-components"
import { SMALL } from "../../support/breakpoints"

export const SectionContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 80vh;
    padding: 5vh 5vw;
    @media (max-width: ${SMALL}px) {
        min-height: 70vh;
    }
`

export const CardsContainer = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-auto-rows: 1fr;
    margin-top: 3rem;
    @media screen and (max-width: 760px) {
        &{
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export const BackgroundImageOne = styled.img`
    position: absolute;
    z-index: -99;
    height: 25%;
    top: 15%;
    left: 22%;
    max-width: 50vw;
    @media (max-width: ${SMALL}px) {
        left: 0;
        top: 20%;
    }
`

export const BackgroundImageTwo = styled.img`
    position: absolute;
    z-index: -99;
    height: 50%;
    top: 15%;
    right: 15%;
    max-width: 50vw;
    @media (max-width: ${SMALL}px) {
        right: -25%;
        top: auto;
        bottom: 17%;
        max-width: 60vw;
        height: auto;
    }
`
