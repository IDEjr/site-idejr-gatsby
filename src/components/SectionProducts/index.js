import React from "react"

// Components
import SectionContainer from "../shared/SectionContainer"
import CardComponent from "./Card/"
import SectionTitle from "../SectionTitle"
import Center from "../shared/Center"

// Styled Components
import {CardsContainer} from "./styled"

// Images
import InstitucionalImage from "../../assets/product-icon-institucional.png"
import BlogImage from "../../assets/product-icon-blog.png"
import EcomerceImage from "../../assets/product-icon-ecomerce.png"
import SistemaImage from "../../assets/product-icon-sistema.png"

let Card = class {
    constructor(image, title, description) {
      this.image = image;
      this.title = title;
      this.description = description;
    }
}

let InstucionalInfo = new Card(InstitucionalImage,"Site Institucional","Ol dsad sadasdasda dsa das das das das das das Ol dsad sadasdasda dsa das das das das das das asáOl dsad sadasdasda dsa das das das das das das asáOl dsad sadasdasda dsa das das das das das das asáasá")
let BlogInfo = new Card(BlogImage,"Blog","Olá")
let EcomerceInfo = new Card(EcomerceImage,"E-Comerce","Olá")
let SistemaInfo = new Card(SistemaImage,"Sistema","Olá")

let ArrayCardInfo = [InstucionalInfo,BlogInfo,EcomerceInfo,SistemaInfo]

const SectionProdutos = () => {
    return(
    <SectionContainer>
        <Center>
            <SectionTitle title={"O que você precisa?"} uppertitle={"Produtos"}/>
        </Center>
        <CardsContainer>
            {ArrayCardInfo.map((card) => 
                <CardComponent
                    Image={card.image}
                    Title={card.title}
                    Description={card.description}/>
            )}
        </CardsContainer>
    </SectionContainer>
    )
}

export default SectionProdutos