import React from "react"

// Styled Components
import styled from "styled-components"

export const CenterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

export default function Center (props) {
    return(
        <CenterDiv>
            {props.children}
        </CenterDiv>
    )
}
