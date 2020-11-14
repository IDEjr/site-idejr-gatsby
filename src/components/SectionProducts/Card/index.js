import React from "react"

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
    )
}

export default Card