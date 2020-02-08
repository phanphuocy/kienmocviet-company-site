import React from "react";

import { graphql } from "gatsby";

import Img from "gatsby-image";

// Import custom components
import PageHeroImage from "../components/reusable/PageHeroImage/PageHeroImage";
import Header from "../components/reusable/Header/Header";
import WidthConstraint from "../components/reusable/WidthConstraint/WitdhConstraint";
import DesignCarousel from "../components/specific/du-an/DesignCarousel/DesignCarousel";

const DesignsPage = ({ children, data }) => {
  const heroImageFluid = data.heroImagesJson;
  return (
    <React.Fragment>
      <Header />
      <PageHeroImage
        imageFluid={heroImageFluid.src.sharp.fluid}
        altText={heroImageFluid.label}
        pageTitle="DỰ ÁN"
      />
      <WidthConstraint maxWidth="laptop">
        <DesignCarousel />
      </WidthConstraint>
    </React.Fragment>
  );
};

export const pageQuery = graphql`
  query queryForHeroImage {
    heroImagesJson(slug: { eq: "steel-ceiling-with-glass" }) {
      slug
      label
      src {
        sharp: childImageSharp {
          fluid {
            base64
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  }
`;

export default DesignsPage;
