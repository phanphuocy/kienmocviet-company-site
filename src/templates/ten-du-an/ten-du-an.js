import React, { useRef, useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import "./ten-du-an.scss";
import { Link } from "gatsby";

// Import spring
import { useSprings, animated } from "react-spring";
import clamp from "lodash/clamp";
import useMeasure from "../../hooks/use-measure";
import useMedia from "../../hooks/use-media-queries"

// Import custom components
import Header from "../../components/reusable/Header/Header";
import WidthConstraint from "../../components/reusable/WidthConstraint/WitdhConstraint";
import CarouselWithPreview from "../../components/specific/ten-du-an/Carousel/Carousel";
export const query = graphql`
  query($name: String) {
    post: jsonFile(file_type: { eq: "ten-du-an" }, file_name: { eq: $name }) {
      file_name
      title
      subtitle
      sections {
        name
        slug
        thumbnails: imageSet {
          label
          source {
            sharp: childImageSharp {
              fluid(maxWidth: 300, maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        images: imageSet {
          label
          source {
            sharp: childImageSharp {
              fluid(maxWidth: 900, maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    hero: jsonFile(items: { elemMatch: { slug: { eq: "school-in-kyoto" } } }) {
      file_name
      file_type
      items {
        label
        src {
          sharp: childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const DesignTemplate = ({ data }) => {
  const { hero, post } = data;
  const images = [];
  post.sections.forEach(section =>
    section.images.forEach(set =>
      images.push({
        label: set.label,
        source: set.source
      })
    )
  )
  const thumbnails = [];
  post.sections.forEach(section =>
    section.thumbnails.forEach(set =>
      thumbnails.push({
        label: set.label,
        source: set.source,
        tag: section.slug
      })
    )
  )

  return (
    <div className="ten-du-an" >
      <Header />
      <WidthConstraint maxWidth="laptop">
        <p className="title-nav">
          <Link to="/">
            <span>Trang Chủ/ </span>
          </Link>{" "}
          <Link to="/du-an/">
            <span>Dự Án</span>
          </Link>
        </p>
        <h1 className="post-title">{post.title}</h1>
        <CarouselWithPreview thumbnails={thumbnails} images={images} />

        <h1>More Infomation</h1>
        <p>{post.subtitle}</p>
      </WidthConstraint>
      <div className="background-filter"></div>
      {/* </BackgroundImage> */}
    </div>
  );
};

export default DesignTemplate;
