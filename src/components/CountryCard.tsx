// react import
import React from "react"
// styled components module import
import styled from "styled-components"

const CardImage = styled.img`
  width: 150px;
  height: 80px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;
  z-index: 1;
`
const CardName = styled.p`
  text-decoration: none !important;
`
const CardDiv = styled.div`
  border: #495a65 solid 1px;
  background-color: #eeeeee;
  width: 250px;
  height: 250px;
  padding: 0.5rem;
  border-radius: 10px;
  animation: 1s ease-out 0s 1 slideInFromLeft;

  @keyframes slideInFromLeft {
    0% {
      transform: translateY(200%);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    color: #8499a5;
    border: #8499a5 solid 1px;
    padding: 0rem;
  }
`

export default function CountryCard(props) {
  return (
    <CardDiv>
      <CardImage src={props.image} alt="country" />
      <CardName>{props.name + " (" + props.code + ")"}</CardName>
    </CardDiv>
  )
}
