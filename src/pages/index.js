import React from "react"

// Import custom components
import Layout from "../components/reusable/Layout/layout";
import Header from "../components/reusable/Header/Header";
import Footer from "../components/reusable/Footer/Footer";
import WidthConstraint from "../components/reusable/WidthConstraint/WitdhConstraint";

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <h1>This is Index page</h1>
    <Footer />
  </React.Fragment>

)

export default IndexPage
