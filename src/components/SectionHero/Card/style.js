import styled from "styled-components"
import Banner from "../images/hero-background.jpg"

export const Container = styled.div`
    background-image: url(${Banner});
    width:100%;
    height: 95vh;     
    display:flex;
    flex-direction: column;
    align-items: flex-start;  
    justify-content: center;
 `;

export const TextContainer = styled.div`    
    width: 300px;       
    margin:5%;
    padding:10px;

  @media (min-width:1020px) {
   width: 500px;
   height: 200px;
   margin: 10%;                 
}

`;

export const Text = styled.div`
    font-size: 25px;    
    color: blue;

  @media (min-width:1020px) {
    font-size: 40px;
    color: blue;
    line-height: 1.0;             
}

`;

export const SubText = styled.div`
    color: gray;
    margin-top: 20px;

  @media (min-width:1020px) {
    color: gray;
    margin-top: 20px;             
}
`;