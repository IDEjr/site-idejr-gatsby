import React from "react"

// Images
import Institucional from "../../../assets/product-icon-institucional.png"

// Styled Components
import {CardContainer,ImageContainer,Dot} from "./styles"

const Card = () => {

    return(
        <CardContainer>
            <ImageContainer>
                <img src={Institucional} alt="Institucional" />
                <h3>Site Institucional</h3>
                <Dot/>
                <h4>Ola meu nome é felopildo</h4>
            </ImageContainer>
        </CardContainer>
    )
}

export default Card