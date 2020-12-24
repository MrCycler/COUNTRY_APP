// react import
import React from "react"
// styled components module import
import styled from "styled-components"
// gatsby modules import
import { useStaticQuery, graphql } from "gatsby"

// components
import StyledInput from "./Search"
import CountryCard from "./CountryCard"
import { Link } from 'gatsby-plugin-modal-routing'

const CountryCardsDiv = styled.div`
  min-height: calc(100vh - 413px);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  gap: 10px;
  @media (min-width: 600px) {
    min-height: calc(100vh - 369px);
  }
  @media (min-width: 800px) {
    min-height: calc(100vh - 338px);
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
          subregion {
            name
            region {
              name
            }
          }
          officialLanguages {
            name
          }
          currencies {
            code
          }
        }
      }
    }
  `)

  //input value (query)
  const [query, setQuery] = React.useState("")
  //filters value (query)
  const [currency, setCurrency] = React.useState("")
  const [language, setLanguage] = React.useState("")
  const [region, setRegion] = React.useState("")

  //original group of countries
  const [countries, setCountries] = React.useState(data.countriesapi.Country)

  //filtered countries
  const [filteredCountries, setFilteredCountries] = React.useState(
    data.countriesapi.Country
  )

  //hook to filter countries
  React.useMemo(() => {
    let result_region = data.countriesapi.Country.filter(({ subregion }) => {
      return `${subregion?.region?.name}`.includes(region)
    })

    let result_language = result_region.filter(({ officialLanguages }) => {
      let languagestxt = ""
      officialLanguages.forEach(value => {
        languagestxt = languagestxt + ` ${value.name}`
      })
      return `${languagestxt}`.includes(language)
    })

    let result = result_language.filter(({ currencies }) => {
      let currenciestxt = ""
      currencies.forEach(value => {
        currenciestxt = currenciestxt + ` ${value.code}`
      })
      return `${currenciestxt}`.includes(currency)
    })

    setCountries(result)
  }, [currency, language, region])

  //hook to search in countries (name & alpha2Code)
  React.useMemo(() => {
    const result = countries.filter(({ name, alpha2Code }) => {
      return `${name} ${alpha2Code}`.toLowerCase().includes(query.toLowerCase())
    })
    setFilteredCountries(result)
  }, [countries, query])

  return (
    <>
      <StyledInput
        search={setQuery}
        setCurrency={setCurrency}
        setLanguage={setLanguage}
        setRegion={setRegion}
      />
      <CountryCardsDiv>
        {filteredCountries.map(({   name, alpha2Code, flag}) => (
         
         <Link to={"/countries/"+name} asModal key={name}>
         <CountryCard
                     name={name}
                     code={alpha2Code}
                     image={flag.svgFile}
                   />
         </Link>
        ))}
      </CountryCardsDiv>
    </>
  )
}