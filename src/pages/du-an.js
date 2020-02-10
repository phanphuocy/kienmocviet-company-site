import React from "react";

import { graphql } from "gatsby";

import Img from "gatsby-image";

// Import custom components
import PageHeroImage from "../components/reusable/PageHeroImage/PageHeroImage";
import Header from "../components/reusable/Header/Header";
import WidthConstraint from "../components/reusable/WidthConstraint/WitdhConstraint";
import DesignCarousel from "../components/specific/du-an/DesignCarousel/DesignCarousel";

const DesignsPage = ({ children, data }) => {
  return (
    <React.Fragment>
      <Header />
      <PageHeroImage
        querySlug="steel-ceiling-with-glass"
        pageTitle="DỰ ÁN"
      />
      <WidthConstraint maxWidth="laptop">
        <DesignCarousel />
      </WidthConstraint>
    </React.Fragment>
  );
};


export default DesignsPage;
