import styled from "styled-components"
import Banner from "../../assets/hero-background.jpg"

export const Container = styled.div`
    background-image: url(${Banner});
    width:100%;
    height: 95vh;     
    display:flex;
    flex-direction: column;
    align-items: flex-start;  
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Poppins', sans-serif;    
 `;

export const TextContainer = styled.div`    
    width: 300px;       
    margin:5%;
    padding:10px;    

  @media (min-width:760px) {
   width: 600px;
   height: 200px;
   margin: 10%;
                    
}
`;

export const Text = styled.div`
    font-size: 25px;    
    color: white;
    font-weight:bold;
    

  @media (min-width:1020px) {
    font-size: 40px;
    color: white;
    line-height: 1.0;             
}

`;

export const SubText = styled.h4`
    color: white;
    margin-top: 20px;
    font-weight:300;

  @media (min-width:1020px) {    
    margin-top: 20px;             
}
`;