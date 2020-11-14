// Colors
import Colors from "../../../style/colors"

// Styled Components
import styled from "styled-components"

export const CardContainer = styled.div`
    height: 400px;
    width: 300px;
    position: relative;

    border-style: solid;
    border-radius: 15px;
    border-color: ${Colors.PURPLE};
    border-width: 3px;

    background-color: #ffffff;
    font-family: 'Poppins', sans-serif;

    h3 {
        font-weight: bold;
        font-size: 1.3rem;
        color: ${Colors.PURPLE};
        margin-bottom: 10px;
    }
    h4 {
        font-weight: 300;
        font-size: 1rem;
        color: ${Colors.BLACK};
    }
    &:nth-child(2n+1){
        left: 0px;
    }
`;

export const ImageContainer = styled.div`
    height: 160px;
    margin: 50px 50px 0px 50px;    
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

