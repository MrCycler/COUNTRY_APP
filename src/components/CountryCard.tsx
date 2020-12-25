import React from "react";
import styled from "styled-components";
//import AOS from 'aos';
//import 'aos/dist/aos.css';

//AOS.init();

/*data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1500" */

const CardImage = styled.img`
  width: 150px;
  height: 80px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;
  z-index:1;
`

export default function CountryCard(props) {
  return (
    
      <CardImage
        src={props.image}
        alt="MIT"
        
      />

  )
}