import React from "react"

// Components
import SectionContainer from "../shared/SectionContainer"
import Card from "./Card"

// Styled Components
import styled from "styled-components"

export const CardsContainer = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
`;


const SectionProdutos = () => {

    return(
    <SectionContainer>
        <CardsContainer>
            <Card />
            <Card />
            <Card />
            <Card />
        </CardsContainer>
    </SectionContainer>
    )

}

export default SectionProdutos