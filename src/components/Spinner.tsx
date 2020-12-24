// react import
import React from "react"
// styled components module import
import styled from "styled-components"

import gif from "../assets/images/spinner.gif"

const SpinnerDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SpinnerImg = styled.img`
  margin: auto;
  width: 40vh;
  height: 40vh;
`

const Spinner = () => (
  <SpinnerDiv>
    <SpinnerImg src={gif} alt="spinner" />
  </SpinnerDiv>
)
export default Spinner
