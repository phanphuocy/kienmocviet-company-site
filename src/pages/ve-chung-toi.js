import React from "react"
import { Link } from "gatsby"

import Layout from "../components/reusable/Layout/layout"

const IndexPage = () => (
  <Layout>
    <h1>This is the About page</h1>
    <Link to="/">&rarr; back to home</Link>
  </Layout>
)

export default IndexPage
