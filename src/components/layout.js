/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import "./layout.css"
import Styles from "./layout.module.css"
const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className={Styles.container}>
        <main style={{ padding: `1rem 0` }}>{children}</main>
        <footer>© {new Date().getFullYear()}, Built with luzhenqian</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
