import React from 'react';
import styled from 'styled-components';

const CardImage = styled.img`
  width: 150px;
  height: 80px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;
`

export default function CountryCard(props){
    return(
      <>
        <CardImage
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