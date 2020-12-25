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

export default function CountryCard(props) {
  return (
    <CardImage
      src={props.image}
      alt="country"           
    />
  )
}
