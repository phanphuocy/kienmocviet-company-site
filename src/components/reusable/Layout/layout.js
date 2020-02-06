import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Header from "../Header/Header"

// import "./layout.css"
import "../../../styles/main.scss"

// import custom hooks
import useSiteMetadata from "../../../hooks/use-siteMetadata"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // Calling hook and extracting graphql JSON values
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="vi" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
