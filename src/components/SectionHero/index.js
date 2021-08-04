import React from "react"
import {Container, TextContainer, Text, SubText} from "./style.js";

export default function Hero() {
    return (
        <Container id="hero">
            <TextContainer>
                <Text>
                    Experiência em
                    desenvolvimento web &
                    sistemas sob encomenda
                </Text>
                <SubText>
                    Empresa júnior IDE
                </SubText>
            </TextContainer>
        </Container>
    );
}
