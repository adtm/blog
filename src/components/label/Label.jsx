import React from "react"
import styled from 'styled-components'

const Container = styled.button`
    border: 0;
    cursor: pointer;
    padding: 0px 15px;
    margin-right: 10px;
    background-color: ${({ bgColor }) => bgColor || "#3E95FB" };
    width: max-content;

    :hover {
        background-color: ${({ hoverColor }) => hoverColor || "#107EFF" };
    }
`

const StyledLabel = styled.span`
    font-family: "SF Compact Display";
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
`

const Label = ({ name, bgColor, hoverColor }) => (
    <Container bgColor={bgColor} hoverColor={hoverColor}>
        <StyledLabel>{name}</StyledLabel>
    </Container>
)

export default Label