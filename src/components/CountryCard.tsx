import React from 'react';
import styled from 'styled-components';


const Card = styled.img`
  width: 20rem;
  height: 7rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;
`

export default function CountryCard(props){
    return(
      <>
        <Card
          src={props.image}
          alt="MIT"
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          data-sal-easing="ease-in-out"
        />
      </>
    )
}