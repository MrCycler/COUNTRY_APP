import React from 'react';
import styled from 'styled-components';


const Input = styled.input`
  background-color: red;
  width: 100%;
  height: 30px;
`;

export default function StyledInput(){
    return(
      <>
        <Input/>
      </>
    )
}