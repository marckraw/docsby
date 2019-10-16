import React from "react"

import Container from "../components/Docs/Container"
import Section from "../components/Docs/Section"

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Section>
          <main>{children}</main>
        </Section>
      </Container>
    </>
  )
}

export default Layout
