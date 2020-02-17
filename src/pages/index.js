import React from "react";

// Import SEO
import Seo from "../components/seo";

// Import custom components
import Header from "../components/reusable/Header/Header";
import Footer from "../components/reusable/Footer/Footer";
import WidthConstraint from "../components/reusable/WidthConstraint/WitdhConstraint";

const IndexPage = () => (
  <React.Fragment>
    <Seo title="Kiến Mộc Việt JSC" />
    <Header />
    <h1>This is Index page</h1>
    <Footer />
  </React.Fragment>
);

export default IndexPage;
