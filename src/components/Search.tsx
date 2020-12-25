// react import
import React from "react"
// styled components module import
import styled from "styled-components"
// gatsby modules import
import { useStaticQuery, graphql } from "gatsby"
// for select input funcionality
import SelectInput from "react-select-input"
import "../assets/css/select_input.css"

const SearchDiv = styled.div`
  background-color: #495a65;
  width: 100%;
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  position: -webkit-sticky; /* Safari */
  position: sticky;
  z-index:2;
  top: calc(22px + 2rem);

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    top: calc(80px + 2rem);
  }
`

const Input = styled.input`
  border: 5px solid #eee;
  border-radius: 5px;
  padding: 5px;
  background-color: white;
  border: solid #eeeeee 2px;
  width: 90%;
  grid-row: 1;
  margin-bottom: 1rem;
  margin-left: 5%;
  margin-right: 5%;
  height: 30px;
  font-family: Archivo, sans-serif;
  font-style: normal;
  font-weight: bold;

  @media (min-width: 600px) {
    grid-column: 1 / 4;
  }

  &:focus {
    outline-color: #e1e2e1;
  }
`

export default function StyledInput(props) {
  //graphql query
  const data = useStaticQuery(graphql`
    query {
      countriesapi {
        Currency {
          name
          code
          symbol
        }
        Language {
          name
          nativeName
        }
        Region {
          name
          subregions {
            name
          }
        }
      }
    }
  `)

  //currencies map
  const curriencies = data.countriesapi.Currency.filter(
    ({ name }) => name != "null"
  ).map(({ name, code, symbol }) => {
    return {
      label: `${name} ${symbol !== "null" ? symbol : ""}`,
      value: code,
    }
  })

  //languages map
  const languages = data.countriesapi.Language.filter(
    ({ name }) => name != "null"
  ).map(({ name, nativeName }) => {
    return { label: `${name} ${nativeName}`, value: name }
  })

  //region map
  const regions = data.countriesapi.Region.filter(
    ({ name }) => name != "null"
  ).map(({ name }) => {
    return { label: `${name}`, value: name }
  })

  return (
    <>
      <SearchDiv>
        <Input
          onChange={e => {
            props.search(e.target.value)
          }}
          placeholder="Ingresar el nombre o el código del país"
        />
        <SelectInput
          onSelect={option => {
            props.setCurrency(option.value)
          }}
          onClear={() => {
            props.setCurrency("")
          }}
          options={curriencies}
          autoFocus={false}
          placeholder="Ingrese moneda"
          openUp={false}
          disableEnter={true}
          collapseOnBlur={true}
          collapseOnEscape={true}
          collapseOnSelect={true}
          cleareble={false}
        />
        <SelectInput
          onSelect={option => {
            props.setLanguage(option.value)
          }}
          onClear={() => {
            props.setLanguage("")
          }}
          options={languages}
          autoFocus={false}
          placeholder="Ingrese idioma"
          openUp={false}
          disableEnter={true}
          collapseOnBlur={true}
          collapseOnEscape={true}
          collapseOnSelect={true}
          cleareble={false}
        />
        <SelectInput
          onSelect={option => {
            props.setRegion(option.value)
          }}
          onClear={() => {
            props.setRegion("")
          }}
          options={regions}
          autoFocus={false}
          placeholder="Ingrese región"
          openUp={false}
          disableEnter={true}
          collapseOnBlur={true}
          collapseOnEscape={true}
          collapseOnSelect={true}
          cleareble={false}
        />
      </SearchDiv>
    </>
  )
}
