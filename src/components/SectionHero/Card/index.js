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

export default function Hero() {
    return (
        <div className="container">
            <div className="text-container">
                <div className="text">
                    Experiencia em 
                    desenvolvimento web &
                    sistemas sob encomenda
                </div>
                <div className="sub-text">
                    Lorem ipsun
                </div>
            </div>
        </div>
    );
}