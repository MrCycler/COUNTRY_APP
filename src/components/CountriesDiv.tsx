// react import
import React from "react"
// styled components module import
import styled from "styled-components"
// gatsby modules import
import { useStaticQuery, graphql } from "gatsby"

// components
import StyledInput from "./Search"
import CountryCard from "./CountryCard"

const CountryCardsDiv = styled.div`
  min-height: calc(100vh - 411px);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  gap: 10px;
  @media (min-width: 600px) {
    min-height: calc(100vh - 369px);
  }
  @media (min-width: 800px) {
    min-height: calc(100vh - 337px);
  }
`

export default function CountriesDiv() {
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

  //input value (query)
  const [query, setQuery] = React.useState("")
  //filtered countries
  const [filteredCountries, setFilteredCountries] = React.useState(
    data.countriesapi.Country
  )

  //hook to filter countries
  React.useMemo(() => {
    const result = data.countriesapi.Country.filter(({ name, alpha2Code }) => {
      return `${name} ${alpha2Code}`.toLowerCase().includes(query.toLowerCase())
    })
    setFilteredCountries(result)
  }, [data.countriesapi.Country, query])

  return (
    <>
      <StyledInput search={setQuery} />
      <CountryCardsDiv>
        {filteredCountries.map(({ name, alpha2Code, flag, index }) => (
          <>
            <CountryCard name={name} code={alpha2Code} image={flag.svgFile} />
          </>
        ))}
      </CountryCardsDiv>
    </>
  )
}
