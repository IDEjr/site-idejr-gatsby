// Colors
import Colors from "../../../style/colors"

// Styled Components
import styled from "styled-components"

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
    padding: 5% 10%;
    position: relative;
    border-style: solid;
    border-radius: 15px;
    border-color: ${Colors.PURPLE};
    border-width: 2px;
    background-color: #ffffff;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);

    h3 {
        font-weight: 900;
        font-size: 1.3rem;
        color: ${Colors.PURPLE};
        margin-bottom: 10px;
        text-align: center;
    }
    h4 {
        font-weight: 300;
        font-size: 1rem;
        color: #A0A0A0;
        text-align: left;
        margin-bottom: 0px;
        font-style: italic;
        line-height:1.5rem;
    }
`;

export const ImageContainer = styled.div`
    height: 160px;
    padding: 5% 15% 0px 15%;
    background-image: Institucional;

    img {
        max-width: 100%;
        max-height: 100%;
        margin: 0px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 760px) {
      padding: 0px;
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

