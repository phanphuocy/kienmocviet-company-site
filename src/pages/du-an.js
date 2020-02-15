import React from "react";

import { graphql } from "gatsby";

import Img from "gatsby-image";

// Import custom components
import PageHeroImage from "../components/reusable/PageHeroImage/PageHeroImage";
import Header from "../components/reusable/Header/Header";
import Footer from "../components/reusable/Footer/Footer";
import WidthConstraint from "../components/reusable/WidthConstraint/WitdhConstraint";
import DesignCarousel from "../components/specific/du-an/DesignCarousel/DesignCarousel";

const DesignsPage = ({ children, data }) => {
  return (
    <React.Fragment>
      <Header />
      <PageHeroImage querySlug="steel-ceiling-with-glass" pageTitle="DESIGN" />
      <WidthConstraint maxWidth="laptop">
        <DesignCarousel />
      </WidthConstraint>
      <Footer />
    </React.Fragment>
  );
};

export default DesignsPage;
