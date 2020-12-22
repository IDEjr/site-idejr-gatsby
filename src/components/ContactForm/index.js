import React from "react"
import styled from "styled-components"
import Colors from "../../utils/colors"

function Input({ label, type, ...rest }) {
  return (
    <div {...rest} >
      <div className="form-item-title">{label}</div>
      <input type={type} placeholder="" />
    </div>
  )
}

const TextArea = ({ label, ...rest }) => (
  <div {...rest}  >
    <div className="form-item-title">{label}</div>
    <textarea rows="5" cols="50"/>
  </div>
)

const StyledInput = styled(Input)`
  border-bottom: 1px solid white;
  color: ${Colors.WHITE};
  input {
    background: none;
    border: none;
    outline: none;
    color: white;
    margin-top: 20px;
    width: 100%;
  } 
`

const StyledTextArea = styled(TextArea)`
  border-bottom: 1px solid white;
  color: ${Colors.WHITE};
  textarea {
    background: none;
    border: none;
    outline: none;
    color: white;
    margin-top: 20px;
    width: 100%;
  }
`

const Form = styled.form`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "name email"
                      "message message"
                      "submit submit";
                      
  grid-gap: 15px;
	font-size:19px;

  #nome {
    grid-area: name;
  }

  #email {
    grid-area: email;
  }

  #submit {
    grid-area: submit;
  }

  #mensagem {
    grid-area: message;
  }
`

const SubmitButton = styled.button `
  border-radius:10px;
	border:1px solid white;    
	color: ${Colors.WHITE};
	font-family: Arial;
	padding:10px 50px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background:linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
	  background-color:#476e9e;
  }
`

const ContactForm = () => (
  <Form>
    <StyledInput id="nome" label="*Nome" type="text" />
    <StyledInput id="email" label="*Email" type="email" />
    <StyledTextArea id="mensagem" label="mensagem" />
    <SubmitButton id="submit" className="myButton">Enviar</SubmitButton>
  </Form>
)

export default ContactForm