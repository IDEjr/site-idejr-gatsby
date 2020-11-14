import React from "react"

// Components
import SectionContainer from "../shared/SectionContainer"
import Card from "./Card/"

// Styled Components
import {CardsContainer} from "./styled"

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