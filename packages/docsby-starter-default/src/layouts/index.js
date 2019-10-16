import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { StaticQuery, graphql } from "gatsby"

import Header from '../components/header';

import docsComponents from "../components/Docs"

import "../styles/main.scss"

const shortcodes = { ...docsComponents }

const Layout = props => {
  const { children } = props

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={staticQueryData => (
        <>
          <Header siteTitle={staticQueryData.site.siteMetadata.title} />
          <div>
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </div>
        </>
      )}
    />
  )
}

export default Layout
