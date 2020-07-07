import React from "react";
import { Link, useStaticQuery } from "gatsby";

// Import SEO
import Seo from "../components/seo";

import Layout from "../components/reusable/Layout/layout";
// Import custom components
import Header from "../components/reusable/Header/Header";
import Footer from "../components/reusable/Footer/Footer";
import WidthConstraint from "../components/reusable/WidthConstraint/WitdhConstraint";
import OurServices from "../components/specific/ve-chung-toi/OurServices/OurServices";
import OurValues from "../components/specific/ve-chung-toi/OurValues/OurValues";

const IndexPage = () => (
  <React.Fragment>
    <Seo title="Về Chúng Tôi" />
    <Header />

    <OurServices />
    <OurValues />
    <WidthConstraint>
      <h1>This is Index page</h1>
    </WidthConstraint>
    <Footer />
  </React.Fragment>
);

export default IndexPage;
