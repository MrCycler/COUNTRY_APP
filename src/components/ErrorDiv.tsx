// react import
import React from "react"
// styled components module import
import styled from "styled-components"

//error gif
import gif from "../assets/images/alien.gif"

const BlankDiv = styled.div`
  min-height: calc(100vh - 255.8px);
  display: flex;
  flex-wrap: wrap;
  align-content: center !important;
  justify-content: space-around;
  gap: 10px;
  @media (min-width: 800px) {
    min-height: calc(100vh - 225px);
  }
`
const ErrorMsgDiv = styled.div``

const ErrorMsg = styled.h2`
  font-weight: bold;
  margin-bottom: 2rem;
`
const ErrorImage = styled.img`
  width: 80px;
  height: 80px;
  margin-left:auto;
  margin-right:auto;
`

export default function ErrorDiv() {
  return (
    <BlankDiv>
      <ErrorMsgDiv>
        <ErrorMsg>
          Error404: No encontramos el país que buscas en la Tierra quizas pueda
          estar en Marte...
        </ErrorMsg>
        <ErrorImage src={gif} alt="error image" />
      </ErrorMsgDiv>
    </BlankDiv>
  )
}
