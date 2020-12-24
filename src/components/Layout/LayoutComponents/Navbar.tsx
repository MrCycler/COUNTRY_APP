// react modules import
import React, { useEffect, useState } from "react"
// styled components module import
import styled from 'styled-components';
// gatsby modules import
import { useStaticQuery, graphql } from "gatsby";

const StyledNavbar = styled.div`
  width: 100%;
  background:#20313B;
  padding-top:1rem;
  padding-bottom:1rem;
  display: flex;
  justify-content: space-around;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
`

const NavbarTitle = styled.div`
  height: 22px;
  padding-top: 2rem;
  /*font-style*/
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 136.8%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: white;
`
const CardImage = styled.img`
  width: 150px;
  height: 80px;
`
export default function Navbar() {

  //graphql query
  const data = useStaticQuery(graphql`
  query {
  countriesapi {
      Country {
      flag {
          svgFile
      }
      }
  }
  }
`)

  //loading state
  const [loading, setLoading] = useState(Math.floor(Math.random() * data.countriesapi.Country.length ))

  //use effect for random country
  
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(Math.floor(Math.random() * data.countriesapi.Country.length))
  }, 1000)
})

  return (
  
      <StyledNavbar>
        <NavbarTitle >
          BUSCADOR DE PAISES
        </NavbarTitle >
        <CardImage  src={data.countriesapi.Country[loading].flag.svgFile}/>
      </StyledNavbar>

  )
}