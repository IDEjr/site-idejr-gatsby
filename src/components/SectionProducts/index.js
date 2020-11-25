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

let InstucionalInfo = new Card(InstitucionalImage,"Site Institucional","Criamos sites intitucionais, tanto sites esstáticos como em Wordpress.")
let BlogInfo = new Card(BlogImage,"Blog","Criamos blogs para seus projetos.")
let EcomerceInfo = new Card(EcomerceImage,"E-Comerce","Criamos sites de e-commerce.")
let SistemaInfo = new Card(SistemaImage,"Sistema","Criamos sistemas sob demanda utilizando as tecnologias mais atualizadas do mercado.")

let ArrayCardInfo = [InstucionalInfo,BlogInfo,EcomerceInfo,SistemaInfo]

const SectionProdutos = (props) => {
    return(
    <SectionContainer {...props}>
        <Center>
            <SectionTitle title={"O que você precisa?"} uppertitle={"Produtos"}/>
        </Center>
        <CardsContainer>
            {ArrayCardInfo.map((card, index) => 
                <CardComponent
                    key={index}
                    Image={card.image}
                    Title={card.title}
                    Description={card.description}/>
            )}
        </CardsContainer>
    </SectionContainer>
    )
}

export default SectionProdutos