import React from "react"
import Center from "../shared/Center"
import SectionTitle from "../SectionTitle"
import {Container, FormContainer} from "./style.js"
import ContactForm from "../ContactForm/index"


export default function Contact({ ...rest }) {
  return (
    <Container id="contato" {...rest} >
      <Center>
        <SectionTitle white title="Quer falar conosco ?" />
      </Center>
      <FormContainer>
        <ContactForm />
      </FormContainer>
    </Container>
  );
}
