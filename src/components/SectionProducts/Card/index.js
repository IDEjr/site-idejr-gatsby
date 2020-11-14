import React from "react"

<<<<<<< HEAD
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
=======
// Styled Components
import {GridContainer,CardContainer,ImageContainer,Dot} from "./styles"

const Card = ({Image,Title,Description}) => {
    return(
        <GridContainer>
            <CardContainer>
                <ImageContainer>
                    <img src={Image} alt={Title}/>
                </ImageContainer>
                <h3>{Title}</h3>
                <Dot/>
                <h4>{Description}</h4>
            </CardContainer>
        </GridContainer>    
>>>>>>> section/produtos
    )
}

export default Card