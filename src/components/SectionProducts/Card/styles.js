// Colors
import Colors from "../../../style/colors"

// Styled Components
import styled from "styled-components"

<<<<<<< HEAD
export const CardContainer = styled.div`
    height: 400px;
    width: 300px;
    position: relative;
=======
export const GridContainer = styled.div`
    display: flex;
    width: 100%;

    &:nth-child(2n+1){
        flex-direction: row-reverse; 
    }

    @media screen and (max-width: 760px) { 
            &{
                justify-content: center;
                flex-direction: row;
            }
        } 
`;

export const CardContainer = styled.div`
    width: 100%;
    max-width: 270px;

    padding: 5%;

    position: relative;
    text-align: center;
>>>>>>> section/produtos

    border-style: solid;
    border-radius: 15px;
    border-color: ${Colors.PURPLE};
<<<<<<< HEAD
    border-width: 3px;
=======
    border-width: 2px;
>>>>>>> section/produtos

    background-color: #ffffff;
    font-family: 'Poppins', sans-serif;

    h3 {
<<<<<<< HEAD
        font-weight: bold;
=======
        font-weight: 900;
>>>>>>> section/produtos
        font-size: 1.3rem;
        color: ${Colors.PURPLE};
        margin-bottom: 10px;
    }
    h4 {
        font-weight: 300;
        font-size: 1rem;
        color: ${Colors.BLACK};
<<<<<<< HEAD
    }
    &:nth-child(2n+1){
        left: 0px;
=======
        text-align: justify;
        text-align-last: left;
        margin-bottom: 0px;
>>>>>>> section/produtos
    }
`;

export const ImageContainer = styled.div`
    height: 160px;
<<<<<<< HEAD
    margin: 50px 50px 0px 50px;    
=======
    padding: 5% 15% 0px 15%;    
>>>>>>> section/produtos
    background-image: Institucional;

    img {
        max-width: 100%;
        max-height: 100%;
        margin: 0px;
        margin-bottom: 20px;
    }
`;

export const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background-color: ${Colors.PURPLE};

    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
`;

