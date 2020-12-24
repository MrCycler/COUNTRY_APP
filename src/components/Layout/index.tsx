import React from "react"
import styled from "styled-components"

import Navbar from "./LayoutComponents/Navbar"
import Footer from "./LayoutComponents/Footer"

const BaseDiv = styled.div`
  text-align: center;
  width:100%;
`

export default function Layout(props) {
  return (
    <>
   <Navbar />
      <BaseDiv>{props.children}</BaseDiv>
      <Footer />
    </>
  )
}

/*   <Footer /> */