import React from "react"
import styled from "styled-components"

const CardImage = styled.img`
  width: 150px;
  height: 80px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;
  z-index: 1;

  animation: 2s ease-out 0s 1 slideInFromLeft;

  @keyframes slideInFromLeft {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0);
  }
}
`
const CardName = styled.p`
text-decoration: none !important;
`
const CardDiv = styled.div`
  border:#495A65 solid 1px;
  width:200px;
  height:200px;
  padding:0.5rem;
  border-radius:10px;
  &:hover {
    color:#8499a5 ;
    padding:0rem;
  }
`

export default function CountryCard(props) {
  return (
    <CardDiv>
    <CardImage
      src={props.image}
      alt="country"           
    />
    <CardName>{props.name+" ("+props.code+")"}</CardName>
    </CardDiv>
  )
}
