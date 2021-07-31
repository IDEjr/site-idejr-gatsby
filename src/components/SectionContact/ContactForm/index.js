import React from "react"
import styled from "styled-components"
import emailjs from 'emailjs-com'
import swal from 'sweetalert'
import Colors from "@utils/colors"
import { useState } from "react";

const Input = ({ id, name, label, type, placeholder, onChange, err, ...rest }) => (
  <div id={`${id}-container` || ""} {...rest} >
    <label htmlFor={id || ""} className="form-item-title">{label || ""}</label>
    <input
      type={type || "text"}
      placeholder={placeholder || ""}
      name={name || ""}
      id={id || ""}
      onChange={e => onChange(e.target.value)}
    />
    {err && <span>*Esse campo é obrigatório</span>}
  </div>
)


const TextArea = ({ id, name, label, placeholder, ...rest }) => (
  <div id={`${id}-container` || ""} {...rest}  >
    <label htmlFor={id || ""} className="form-item-title">{label || ""}</label>
    <textarea rows="5" cols="50"
      placeholder={placeholder || ""}
      name={name || ""}
      id={id || ""}
    />
  </div>
)

const StyledInput = styled(Input)`
  
  color: ${Colors.WHITE};

  input {
    background: none;
    border: none;
    outline: none;
    color: white;
    margin-top: 20px;
    width: 100%;
    font-size: 1rem;
    align-self: flex-end;
    border-bottom: 1px solid white;
  }

  span {
    display: block;
    font-size: 0.875rem;
    margin-top: 8px;
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
    font-size: 1rem;
    min-height: 3rem;
    resize: vertical;
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

  #nome-container {
    grid-area: name;
  }

  #email-container {
    grid-area: email;
  }

  #mensagem-container {
    grid-area: message;
  }

  #submit {
    grid-area: submit;
  }

  @media (max-width:768px) {
  grid-template-columns: 1fr;
  grid-template-areas: "name"
                      "email"
                      "message"
                      "submit";
  }
`

const SubmitButton = styled.button`
  border-radius:10px;
	border:1px solid white;
	color: ${Colors.WHITE};
	font-family: Arial;
	padding:10px 50px;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
`

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errName, setErrName] = useState(false)
  const [errEmail, setErrEmail] = useState(false)
  console.log("errName", errName, "errEmail", errEmail,);

  const sendEmail = e => {
    e.preventDefault()

    if (name.length === 0 || email.length === 0) {
      console.log("Não enviou email");
      setErrName(name.length === 0);
      setErrEmail(email.length === 0);
      return;
    }
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
    setErrName(false);
    setErrEmail(false);
    setName('');
    setEmail('');
  }

  return (
    <Form onSubmit={sendEmail}>
      <StyledInput name="name" id="nome" onChange={setName} label="*Nome" type="text" err={errName} />
      <StyledInput name="email" id="email" onChange={setEmail} label="*Email" type="email" err={errEmail} />
      <StyledTextArea name="message" id="mensagem" label="Mensagem" />
      <SubmitButton id="submit" className="myButton">Enviar</SubmitButton>
    </Form>
  )
}

export default ContactForm
