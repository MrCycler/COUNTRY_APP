// react import
import React from "react"
// gatsby modules import
import { useStaticQuery, graphql } from "gatsby"

// components
import StyledInput from "./Input"
import CountryCard from "./CountryCard"


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
    const [query, setQuery] = React.useState('');
    const [filteredCountries, setFilteredCountries] = React.useState(data.countriesapi.Country);
  
    React.useMemo(() => {
        const result = data.countriesapi.Country.filter(({name,alpha2Code}) => {
          return `${name} ${alpha2Code}`
            .includes(query);
        });
        setFilteredCountries(result);
      }, [data.countriesapi.Country, query]);
    

  return (
    <>
      <StyledInput search={setQuery}/>
      {filteredCountries.map(({ name,alpha2Code,flag, index }) => (
        <>
          <CountryCard name={name} code={alpha2Code} image={flag.svgFile} />
        </>
      ))}
    </>
  )
}
