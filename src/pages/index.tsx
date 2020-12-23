import React from "react";
import { Link, graphql } from "gatsby";
import "../assets/css/global.css";

import Layout from "../components/Layout/index"
import StyledInput from "../components/Input"
import CountryCard from "../components/CountryCard"

import Image from "../components/image"
import styled from "styled-components"
import SEO from "../components/seo"
import { AiFillFlag } from "react-icons/ai"

export const query = graphql`
  query {
    countriesapi {
      Country {
        name
        flag{
          svgFile
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    
    <SEO title="Home" />
    <StyledInput></StyledInput>
    {data.countriesapi.Country.map(({name,flag,index }) => (
      <>
      <p>{name}</p>
      <CountryCard image={flag.svgFile}/>
      </>
    ))}
  
  </Layout>
)

export default IndexPage
