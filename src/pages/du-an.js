import React from "react";

import { graphql } from "gatsby";

import Img from "gatsby-image";

// Import custom components
import PageHeroImage from "../components/reusable/PageHeroImage/PageHeroImage";
import Header from "../components/reusable/Header/Header";
import WidthConstraint from "../components/reusable/WidthConstraint/WitdhConstraint";
import DesignCarousel from "../components/specific/du-an/DesignCarousel/DesignCarousel";

const DesignsPage = ({ children, data }) => (
  <React.Fragment>
    <Header />
    <PageHeroImage
      imageFluid={data.thumbnailsJson.src.childImageSharp.fluid}
      altText="Image of the very beautiful architecture"
      pageTitle="DỰ ÁN"
    />
    <WidthConstraint>
      <h1>This is Du An page</h1>
      <p>
        Dolor ea non duis mollit in dolore officia excepteur esse tempor aliqua
        non non anim. Ut magna et nulla officia eu eu aute dolor do commodo
        laboris cupidatat id. Tempor eu tempor laboris officia. Dolore et
        aliquip eu velit qui mollit nostrud.
      </p>
      <DesignCarousel />
    </WidthConstraint>
  </React.Fragment>
);

export const pageQuery = graphql`
  query MyQuery {
    thumbnailsJson {
      categories
      id
      label
      src {
        childImageSharp {
          fluid {
            src
            srcWebp
            srcSetWebp
            srcSet
            base64
          }
        }
      }
    }
  }
`;

export default DesignsPage;
