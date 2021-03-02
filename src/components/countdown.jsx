import React from "react"
import styled from "styled-components"
import Countdown from "react-countdown"
import logo from "@assets/logo_roxo.png"


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
    @media(max-width: 768px){
        padding: 30px;
        width:  calc(100vw - 60px);
        height: calc(100vh - 60px);
    }


`
const StyledImg = styled.img`
    max-width: 300px;
    width: 100%;
    height: auto;
`

const BoxText = styled.div`
    margin: unset;
    width: 80vw;
    height: auto;
    text-align: center;
`
const StyledH1 = styled.h1`
    font-weight: 300;
`

const Styledh2 = styled.h2`
    font-weight: 300;
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
    @media(max-width: 768px){
        text-align: center;
        font-size: 15px;
    }
`




const Contador = () => {
    return(
        <StyledContainer>
            <StyledH1>Tem novidade chegando na IDE!</StyledH1>
            <StyledImg src = {logo}/>

            <Countdown daysInHours date = {'11-26-2020'}/>

            <BoxText>
                <Styledh2>Quer realizar um projeto conosco?</Styledh2>
                <Styledh2>Envie um e-mail para <a href="contato@idejr.com.br" >contato@idejr.com.br</a></Styledh2>
            </BoxText>

        </StyledContainer>
    )
}

export default Contador
