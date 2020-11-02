import React from "react"

// Styled Components
import styled from "styled-components"

export const Container = styled.div`
    min-width:100px;
    max-width:100px;
    text-align:center;
	margin:0 auto;

    h3 {
        position: relative;
        left: 0px;
    }

`;

export const SubTitleContainer = styled.div`

    h3 {

    }
`;

const SectionTitle = ({ mainTitle, subTitle }) => {

    return(
    <Container>
        <h3>{subTitle}</h3>
        <h2>{mainTitle}</h2>
    </Container>
    )

}

export default SectionTitle