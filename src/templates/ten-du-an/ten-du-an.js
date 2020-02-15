import React from "react";
import { graphql, Link } from "gatsby";
import "./ten-du-an.scss";

// Import custom components
import Header from "../../components/reusable/Header/Header";
import Footer from "../../components/reusable/Footer/Footer";
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
  }
`;

const DesignTemplate = ({ data }) => {
  const { post } = data;
  const images = [];
  post.sections.forEach(section =>
    section.images.forEach(set =>
      images.push({
        label: set.label,
        source: set.source
      })
    )
  );
  const thumbnails = [];
  post.sections.forEach(section =>
    section.thumbnails.forEach(set =>
      thumbnails.push({
        label: set.label,
        source: set.source,
        tag: section.slug
      })
    )
  );

  return (
    <div className="ten-du-an">
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
        <div className="info">
          <h2>More Infomation</h2>
          <p>{post.subtitle}</p>
        </div>
      </WidthConstraint>
      <div className="background-filter"></div>

      <Footer />
    </div>
  );
};

export default DesignTemplate;
