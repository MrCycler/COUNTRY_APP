
import React from "react";
import styled from 'styled-components';

import Navbar from "./LayoutComponents/Navbar";
import Footer from "./LayoutComponents/Footer";


const BaseDiv= styled.div`
  text-align:center;
`;

export default function Layout(props) {
  return (
    <>
       <Navbar active={1}/>
        <BaseDiv>{props.children}</BaseDiv>
        <Footer/>
    </>
  );
}

// 
