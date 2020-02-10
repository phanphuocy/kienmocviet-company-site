import React from "react";

import { graphql } from "gatsby";

import Img from "gatsby-image";

// Import custom components
import PageHeroImage from "../components/reusable/PageHeroImage/PageHeroImage";
import Header from "../components/reusable/Header/Header";
import WidthConstraint from "../components/reusable/WidthConstraint/WitdhConstraint";
import DesignCarousel from "../components/specific/du-an/DesignCarousel/DesignCarousel";

const ProjectPage = ({ children, data }) => {
  const heroImageFluid = data.jsonFile.items[1];
  return (
    <React.Fragment>
      <Header />
      <PageHeroImage
        imageFluid={heroImageFluid.src.sharp.fluid}
        altText={heroImageFluid.label}
        pageTitle="CÔNG TRÌNH"
      />
      <WidthConstraint maxWidth="laptop">
        <DesignCarousel />
      </WidthConstraint>
    </React.Fragment>
  );
};

export const pageQuery = graphql`
  query {
    jsonFile(items: { elemMatch: { slug: { eq: "changgi-airport" } } }) {
      file_name
      items {
        label
        slug
        src {
          sharp: childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
`;

export default ProjectPage;
