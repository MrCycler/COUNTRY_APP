// react modules import
import React, { useEffect, useState } from "react"
// styled components module import
import styled from "styled-components"
// gatsby modules import
import { useStaticQuery, graphql, Link } from "gatsby"
import { Link as ModalLink } from "gatsby-plugin-modal-routing"

const StyledNavbar = styled.div`
  width: 100%;
  background: #20313b;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  z-index:2;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
`

const NavbarTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 22px;
  /*font-style*/
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 136.8%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: white;
  text-decoration: none !important;
`
const CardImage = styled.img`
  width: 150px;
  height: 80px;
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Navbar() {
  //graphql query
  const data = useStaticQuery(graphql`
    query {
      countriesapi {
        Country {
          name
          alpha2Code
          flag {
            svgFile
          }
        }
      }
    }
  `)

  //loading state
  const [loading, setLoading] = useState(
    Math.floor(Math.random() * data.countriesapi.Country.length)
  )

  //use effect for random country

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(Math.floor(Math.random() * data.countriesapi.Country.length))
    }, 2000)
  })

  return (
    <StyledNavbar>
      <StyledLink to="/">
        <NavbarTitle>BUSCADOR DE PAISES</NavbarTitle>
      </StyledLink>
      <ModalLink
        to={"/countries/" + data.countriesapi.Country[loading].alpha2Code}
        asModal
      >
        <CardImage src={data.countriesapi.Country[loading].flag.svgFile} />
      </ModalLink>
    </StyledNavbar>
  )
}
