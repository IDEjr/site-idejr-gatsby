import React from "react"

// Components
import CardComponent from "./Card/"
import SectionHeader from "../shared/SectionHeader"
// Styled Components
import {SectionContainer, CardsContainer, BackgroundImageOne, BackgroundImageTwo} from "./styled"

// Images
import InstitucionalImage from "../../assets/product-icon-institucional.png"
import BlogImage from "../../assets/product-icon-blog.png"
import EcomerceImage from "../../assets/product-icon-ecomerce.png"
import SistemaImage from "../../assets/product-icon-sistema.png"
import Blob1 from "../../assets/bg-blob-1.svg"
import Blob2 from "../../assets/bg-blob-3.svg"

let Card = class {
    constructor(image, title, description) {
      this.image = image;
      this.title = title;
      this.description = description;
    }
}

let InstucionalInfo = new Card(InstitucionalImage,"Sites Institucionais","Criamos websites institucionais para você estabelecer a sua marca na Web.")
let BlogInfo = new Card(BlogImage,"Blogs","Criamos blogs integrados para o conteúdo que você sonha produzir.")
let EcomerceInfo = new Card(EcomerceImage,"E-Comerces","Criamos e-commerces para você levar o seu negócio a um novo nível.")
let SistemaInfo = new Card(SistemaImage,"Sistemas","Criamos sistemas sob medida utilizando as tecnologias mais atualizadas do mercado.")

let ArrayCardInfo = [InstucionalInfo,BlogInfo,EcomerceInfo,SistemaInfo]

const SectionProdutos = (props) => {
    return(
    <SectionContainer id="produtos" {...props}>
        <SectionHeader title="Produtos" description="O que você precisa?"/>
        <CardsContainer>
            {ArrayCardInfo.map((card, index) =>
                <CardComponent
                    key={index}
                    Image={card.image}
                    Title={card.title}
                    Description={card.description}/>
            )}
        </CardsContainer>
        <BackgroundImageOne src={Blob1} alt="" aria-hidden="true"/>
        <BackgroundImageTwo src={Blob2} alt="" aria-hidden="true"/>
    </SectionContainer>
    )
}

export default SectionProdutos
