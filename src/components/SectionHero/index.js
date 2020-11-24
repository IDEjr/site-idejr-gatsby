import React from "react"
import { Link } from "gatsby"
import {Container, TextContainer, Text, SubText} from "./style.js";

export default function Hero() {
    return (
        <Container>
            <TextContainer>
                <Text>
                    Experiencia em 
                    desenvolvimento web &
                    sistemas sob encomenda
                </Text>
                <SubText>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna 
                    aliqua.                  
                </SubText>
            </TextContainer>
        </Container>
    );
}