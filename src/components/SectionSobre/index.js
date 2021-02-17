import React from "react"

// Components
import SectionContainer from "../shared/SectionContainer"
import Center from "../shared/Center"
import SectionTitle from "../SectionTitle"

// Styled Components
import {LinksContainer, TextContainer, Bar, Text} from "./style"

const SectionSobre = ({ ...rest }) => {
    return(
        <SectionContainer id="sobre" {...rest} >
            <LinksContainer>

            </LinksContainer>
            <TextContainer>
                    <Center>
                        <SectionTitle uppertitle={"Quem somos"} title={"Nós te ajudamos a colocar seu negócio na era digital"}/>
                    </Center>
                    <Text>
                        <Bar />
                        A IDE é a empresa júnior dos cursos Ciência e Engenharia de Computação da Universidade Federal do Rio Grande do Sul.<br/><br/>
                        Formada por alunos interessados em se tornarem empreendedores e profissionais excepcionais, a IDE fornece soluções em software, como sites e sistemas, com preços abaixo do mercado aliados à excelência da UFRGS, o Instituto de Informática e seus professores, que fornecem apoio técnico e aconselhamento aos estudantes.
                    </Text>
            </TextContainer>
        </SectionContainer>
    )
}

export default SectionSobre
