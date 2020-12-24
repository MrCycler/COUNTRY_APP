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
  background-color: #495A65;
  width: 100%;
  padding-bottom:1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: calc(80px + 2rem);
`

const Input = styled.input`
  background-color: white;
  border: solid #EEEEEE 2px;
  width: 80%;
  grid-column: 1 / 4;
  grid-row: 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 10%;
  margin-right: 10%;
  height: 30px;
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
      label: `${name} ${symbol !== "null" ? "(" + symbol + ")" : ""}`,
      value: code,
    }
  })

  //languages map
  const languages = data.countriesapi.Language.filter(
    ({ name }) => name != "null"
  ).map(({ name, nativeName }) => {
    return { label: `${name} (${nativeName})`, value: name }
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
          onSelect={() => {
            console.log("ga")
          }}
          options={curriencies}
          autoFocus={false}
          openUp={false}
          disableEnter={true}
          collapseOnBlur={true}
          collapseOnEscape={true}
          collapseOnSelect={true}
          cleareble={false}
        />
        <SelectInput
          onSelect={() => {
            console.log("ga")
          }}
          options={languages}
          autoFocus={false}
          openUp={false}
          disableEnter={true}
          collapseOnBlur={true}
          collapseOnEscape={true}
          collapseOnSelect={true}
          cleareble={false}
        />
        <SelectInput
          onSelect={() => {
            console.log("ga")
          }}
          options={regions}
          autoFocus={false}
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
