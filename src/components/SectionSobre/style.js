// Styled Components
import styled from "styled-components"

// Colors
import Colors from "../../style/colors"

export const LinksContainer = styled.div`
    
    width: 50px;
    height: 100%;

    @media screen and (max-width: 760px) { 
        &{
        }
    } 
`;

export const TextContainer = styled.div`
    
    width: 600px;
    height: 100%;

    @media screen and (max-width: 760px) { 
        &{
            width: 100%;
        }
    } 
`;

export const Text = styled.div`

    display: flex;
    flex-direction: row;
    text-align: justify;
     text-justify: inter-word;

    padding-right: 100px;

    @media screen and (max-width: 760px) { 
        &{
            flex-direction: column;
            padding-right: 0px;
        }
    } 
`;

export const Bar = styled.div`

    background-color: ${Colors.BLUE};
    height: 1px;
    width: 70px;
    min-width: 70px;
    margin-bottom: 30px;
    margin-right: 30px;
`;