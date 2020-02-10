import React from "react";

import { graphql } from "gatsby";

import Img from "gatsby-image";

// Import custom components
import PageHeroImage from "../components/reusable/PageHeroImage/PageHeroImage";
import Header from "../components/reusable/Header/Header";
import WidthConstraint from "../components/reusable/WidthConstraint/WitdhConstraint";
import DesignCarousel from "../components/specific/du-an/DesignCarousel/DesignCarousel";

const ProjectPage = ({ children, data }) => {
  return (
    <React.Fragment>
      <Header />
      <PageHeroImage
        querySlug="changgi-airport"
        pageTitle="CÔNG TRÌNH"
      />
      <WidthConstraint maxWidth="laptop">
        <DesignCarousel />
      </WidthConstraint>
    </React.Fragment>
  );
};


export default ProjectPage;
