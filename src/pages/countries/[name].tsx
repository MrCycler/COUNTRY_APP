// react import
import React from "react"
// styled components module import
import styled from "styled-components"

import { graphql, useStaticQuery, Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

import Navbar from "../../components/Layout/LayoutComponents/Navbar"
import Footer from "../../components/Layout/LayoutComponents/Footer"
import ErrorDiv from "../../components/ErrorDiv"

const CountryInfoDiv = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const CountryImage = styled.img`
  width: 80%;
  //height: 40vh;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 10%;
  margin-left: 10%;
  z-index: 1;
  border: solid 2px #c7cbce;
`

const CountryTitle = styled.h1`
  margin-left: 10%;
`
const CountryLabel = styled.p`
  font-size: 1.5rem;
  margin-left: 10%;
  margin-top: 1.7rem;
  font-weight: 500;
`
const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
  @media (min-width: 800px) {
    grid-column: 1/3;
  }
`
const CloseButtom = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: #c82333;
  border: solid #c82333 1px;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #c7cbce;
  &::active {
    border: solid #c82333 1px;
  }
`

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
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <>
          {modal ? <></> : <Navbar />}

          {country?<CountryInfoDiv>
            <ControlDiv>
              {modal ? (
                <Link to={closeTo}>
                  <CloseButtom>X</CloseButtom>
                </Link>
              ) : (
                <></>
              )}
            </ControlDiv>
            <div>
              <CountryTitle>
                {country.name +
                  " (" +
                  country.alpha2Code +
                  ")" +
                  " (" +
                  country.alpha3Code +
                  ")"}
              </CountryTitle>

              <CountryImage src={country.flag.svgFile} alt="modalflag" />
            </div>
            <div>
              <CountryLabel>
                <b>Nombre original: </b>
                {country.nativeName}
              </CountryLabel>
              <CountryLabel>
                <b>Área: </b>
                {country.area ? country.area + " m2" : ""}
              </CountryLabel>
              <CountryLabel>
                <b>Población: </b>
                {country.population + " hab"}
              </CountryLabel>
              <CountryLabel>
                <b>Capital: </b>
                {country.capital}
              </CountryLabel>
              <CountryLabel>
                <b>Gentilicio: </b>
                {country.demonym}
              </CountryLabel>
              <CountryLabel>
                <b>Ubicación: </b>
                {country.location.latitude.toFixed(3) +
                  "º, " +
                  country.location.longitude.toFixed(3) +
                  "º"}
              </CountryLabel>
              <CountryLabel>
                <b>Código: </b>
                {country.numericCode}
              </CountryLabel>
              <CountryLabel>
                <b>Región: </b>
                {country.subregion?.region?.name +
                  " (" +
                  country.subregion?.name +
                  ")"}
              </CountryLabel>
              <CountryLabel>
                <b>Códigos Telefónicos: </b>
                {country.callingCodes
                  .map(callingCode => callingCode.name)
                  .toString()}
              </CountryLabel>
              <CountryLabel>
                <b>Dominios Web: </b>
                {country.topLevelDomains
                  .map(topLevelDomain => topLevelDomain.name)
                  .toString()}
              </CountryLabel>

              <CountryLabel>
                <b>Lenguajes: </b>
                {country.officialLanguages
                  .map(officialLanguage => officialLanguage.name)
                  .toString()}
              </CountryLabel>

              <CountryLabel>
                <b>Sinónimos: </b>
                {country.alternativeSpellings
                  .map(alternativeSpelling => alternativeSpelling.name)
                  .toString()}
              </CountryLabel>

              <CountryLabel>
                <b>Bloques ecónomicos: </b>
                {country.regionalBlocs
                  .map(
                    regionalBloc =>
                      regionalBloc.name + " (" + regionalBloc.acronym + ")"
                  )
                  .toString()}
              </CountryLabel>
            </div>
          </CountryInfoDiv>
          :<ErrorDiv />}

          {modal ? <></> : <Footer />}
        </>
      )}
    </ModalRoutingContext.Consumer>
  )
}

/*   
<CountryLabel>{"Bloque económico: "+country.regionalBlocs[0].name+" ("+country.regionalBlocs[0].acronym+")"}</CountryLabel>
{modal ? <Link to={closeTo}>Close</Link> : <Link to="/">Close</Link>} */
