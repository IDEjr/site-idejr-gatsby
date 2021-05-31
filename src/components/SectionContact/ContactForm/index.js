import React from "react"
import styled from "styled-components"
import emailjs from 'emailjs-com'
import swal from 'sweetalert'
import Colors from "@utils/colors"

const Input = ({ id, name, label, type, placeholder, ...rest }) => (
  <div id={id || ""} {...rest} >
    <label htmlFor={id || ""} className="form-item-title">{label || ""}</label>
    <input
      type={type || "text"}
      placeholder={placeholder || ""}
      name={name || ""}
      />
  </div>
)


const TextArea = ({ id, name, label, placeholder, ...rest }) => (
  <div id={id || ""} {...rest}  >
    <label htmlFor={id || ""} className="form-item-title">{label || ""}</label>
    <textarea rows="5" cols="50"
      placeholder={placeholder || ""}
      name={name || ""}
    />
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

  @media (max-width:768px) {
  grid-template-columns: 1fr;
  grid-template-areas: "name"
                      "email"
                      "message"
                      "submit";
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
`

const ContactForm = () => {
  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm('service_lwkd6jd', 'template_ihh4lbk', e.target, 'user_ko0sipqntvacdTcfo9SGw')
      .then((result) => {
        console.log(result.text);
        swal({
          title: "Email enviado!",
          text: "Em breve entraremos em contato com você.",
          icon: "success"
        })
      }, (error) => {
        console.log(error.text);
        swal({
          title: "Email não enviado!",
          text: "Aconteceu algum problema no envio do seu email, por favor, tente novamente.",
          icon: "error"
        })
      });
    e.target.reset()
  }

  return (
    <Form onSubmit={sendEmail}>
      <StyledInput name="name" id="nome" label="*Nome" type="text" />
      <StyledInput name="email" id="email" label="*Email" type="email" />
      <StyledTextArea name="message" id="mensagem" label="Mensagem" />
      <SubmitButton id="submit" className="myButton">Enviar</SubmitButton>
    </Form>
  )
}

export default ContactForm
