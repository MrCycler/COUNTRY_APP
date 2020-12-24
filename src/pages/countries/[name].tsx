import React from "react"
import { graphql, Link } from "gatsby"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

export default function CountryModal(props) {
  return(<ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              
            </h1>
          </header>
        )}

        <h2>{props.name}</h2>
      </div>
    )}
  </ModalRoutingContext.Consumer> 
  )


}

/*<ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              
            </h1>
          </header>
        )}

        <h2>{props.name}</h2>
      </div>
    )}
  </ModalRoutingContext.Consumer> */