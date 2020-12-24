// react import
import React from 'react';
import styled from 'styled-components';


const Input = styled.input`
  background-color: white;
  border: solid #009EDB 2px;
  width: 80%;
  margin-left:auto;
  margin-right:auto;
  height: 30px;

  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: calc(80px + 2rem);
`;

export default function StyledInput(props){
    return(
      <>
        <Input onChange={e=>{props.search(e.target.value)}} placeholder="Ingresar el nombre o el código del país"/>
      </>
    )
}