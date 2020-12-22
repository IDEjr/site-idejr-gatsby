import React from "react"

// Styled Components
import styled from "styled-components"

export const Container = styled.div`
    padding: 10vh 10vw;
`;

export default function SectionContainer ({ children, ...rest }) {
    return(
        <Container {...rest} >
            {children}
        </Container>
    )
}

