import React from "react"
import SectionHeader from "../shared/SectionHeader"
import SocialNav from "./SocialNav"

// Styled Components
import {SectionContainer, TextContainer, Paragraph, SectionBackground} from "./style"
import blob from '../../assets/bg-blob-3.svg'

const SectionSobre = (props) => {
    return(
        <SectionContainer id="sobre" {...props}>
            <TextContainer>
                <SectionHeader title="Quem somos" description="Nós te ajudamos a colocar o seu negócio na era digital" />
                <Paragraph>
                    A IDE é a empresa júnior dos cursos Ciência e Engenharia de Computação da Universidade Federal do Rio Grande do Sul. Formada por alunos interessados em se tornarem empreendedores e profissionais excepcionais, a IDE fornece soluções em software, como sites e sistemas, com preços abaixo do mercado aliados à excelência da UFRGS, o Instituto de Informática e seus professores, que fornecem apoio técnico e aconselhamento aos estudantes.
                </Paragraph>
                <SectionBackground src={blob} alt="" aria-hidden="true" />
            </TextContainer>
            <SocialNav />
        </SectionContainer>
    )
}

export default SectionSobre
