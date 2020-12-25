import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

export default function CountryModal(props) {
  //graphql query
  const data = useStaticQuery(graphql`
    query {
      countriesapi {
        Country {
          name
          nativeName
          alpha2Code
          alpha3Code
          area
          population
          populationDensity
          capital
          demonym
          gini
          location {
            latitude
            longitude
          }
          numericCode
          subregion {
            name
            region {
              name
            }
          }
          officialLanguages {
            iso639_1
            iso639_2
            name
            nativeName
          }
          currencies {
            name
            symbol
          }
          regionalBlocs {
            name
            acronym
            otherAcronyms {
              name
            }
            otherNames {
              name
            }
          }
          flag {
            emoji
            emojiUnicode
            svgFile
          }
          topLevelDomains {
            name
          }
          callingCodes {
            name
          }
          alternativeSpellings {
            name
          }
        }
      }
    }
  `)

  //filtered country
  const [country, setCountry] = React.useState(data.countriesapi.Country[0])

  //hook to search in countries (name & alpha2Code)
  React.useMemo(() => {
    const result = data.countriesapi.Country.filter(({ alpha2Code }) => {
      return alpha2Code === props.name
    })
    setCountry(result[0])
  }, [props])

  return (
    < ModalRoutingContext.Consumer >
      {({ modal, closeTo }) => (
        <div>
          {modal ? <Link to={closeTo}>Close</Link> : <Link to="/">Close</Link>}
        </div>
      )}
    </ ModalRoutingContext.Consumer >
  )
}
