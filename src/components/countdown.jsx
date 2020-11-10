import React from "react"
import styled from "styled-components"
import Countdown from "react-countdown"
import logo from "../images/logo_roxo.png"


// entre em contato com contato@idejr.com.br


const StyledContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    width:  100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & span{
        font-size: 40px;
        margin: 30px;
    }

`
const StyledImg = styled.img`
    width: 300px;
    height: auto;
    margin: 30px;
`

const BoxText = styled.div`
    margin: unset;
    width: 80vw;
    height: auto;
    text-align: center;
`

const Styledh1 = styled.h1`
    font-size: 30px;
    margin: 30px;
    & a {
        color: #662D91;
        text-decoration: none;
    }
    
    a:hover 
    {
         color:#00A0C6; 
         text-decoration:none; 
         cursor:pointer;  
    }
    @media(max-width: 600px){
        
        text-align: center;
    }
`




const Contador = () => {
    return(
        <div>
            <StyledContainer>
                <StyledImg src = {logo}/>
                
                <Countdown date = {'11-26-2020'}/>
                
                <BoxText>
                    <Styledh1>Quer realizar um projeto conosco?</Styledh1>
                    <Styledh1>Entre em contato com <a href="contato@idejr.com.br" >contato@idejr.com.br</a></Styledh1>
                </BoxText>

            </StyledContainer>
        </div>
    )
}

export default Contador