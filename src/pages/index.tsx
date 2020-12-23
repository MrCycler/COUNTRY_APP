// react modules import
import React, { useEffect, useState } from "react"

// global style
import "../assets/css/global.css"

// layout component
import Layout from "../components/Layout/index"

// components
import CountriesDiv from "../components/CountriesDiv"
import Spinner from "../components/Spinner"

export default function IndexPage() {

  //loading state
  const [loading, setLoading] = useState(true)

  //use effect for count
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  //loading switch
  if (loading === true) {
    return <Spinner />
  } else {
    return (
      <Layout>
        <CountriesDiv />
      </Layout>
    )
  }
}
