// react import
import React from "react";
// gatsby modules import
import { Link, graphql } from "gatsby";

// global style
import "../assets/css/global.css";

// layout component
import Layout from "../components/Layout/index";


// components
import CountriesDiv from "../components/CountriesDiv";




const IndexPage = () => (
  
  <Layout>
    <CountriesDiv/>
  </Layout>

)

export default IndexPage
