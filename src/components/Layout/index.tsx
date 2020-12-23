
import React from "react";
import Navbar from "./LayoutComponents/Navbar";
import Footer from "./LayoutComponents/Footer";

export default function Layout(props) {
  return (
    <>
       <Navbar active={1}/>

        {props.children}
        <Footer/>
    </>
  );
}

// 
