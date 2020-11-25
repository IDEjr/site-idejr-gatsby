import React from "react"
import { Link } from "gatsby"
import "./style.css"


function Input(props) {

  return (
    <div id={props.ide} className="form-item" >
      <div className="form-item-title">{props.label}</div>
      <input type={props.type} placeholder="" />
    </div>
  )
}

export default function Contact({ ...rest }) {
  return (
    <div className="container" {...rest} >
      <div className="section-title"><h2>Quer falar conosco ?</h2></div>
      <div className="flex-form">
        <Input ide="nome" label="*Nome" type="text" />
        <Input ide="email" label="*Email" type="email" />
        <div id="menssagem" className="form-item">
          <div className="form-item-title">Menssagem</div>
          <textarea rows="5" cols="50" name="comment" form="usrform"/>
        </div>
        <a href="#" id="botao" className="myButton">Enviar</a>
      </div>
      
    </div>
  );
}