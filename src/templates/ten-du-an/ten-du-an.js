import React from "react";
import { graphql, Link } from "gatsby";
import "./ten-du-an.scss";

// Import icons
import { FiGrid } from "react-icons/fi";

// Import custom components
import Header from "../../components/reusable/Header/Header";
import Footer from "../../components/reusable/Footer/Footer";
import WidthConstraint from "../../components/reusable/WidthConstraint/WitdhConstraint";
import CarouselWithPreview from "../../components/specific/ten-du-an/Carousel/Carousel";

export const query = graphql`
  query {
    allJsonFile(filter: { file_type: { eq: "ten-du-an" } }) {
      edges {
        post: node {
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
        next {
          title
          file_name
        }
        previous {
          title
          file_name
        }
      }
    }
  }
`;

/*
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
*/

const DesignTemplate = ({ data, pageContext }) => {
  const { post, next, previous } = data.allJsonFile.edges.find(
    node => node.post.file_name === pageContext.name
  );
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
      <div className="heading">
        <p className="title-nav">
          <Link to="/">
            <span>Trang Chủ/ </span>
          </Link>{" "}
          <Link to="/du-an/">
            <span>Dự Án</span>
          </Link>
        </p>
        <h1 className="post-title">{post.title}</h1>
      </div>
      <WidthConstraint maxWidth="laptop">
        <CarouselWithPreview thumbnails={thumbnails} images={images} />
        <div className="info">
          <h2>More Infomation</h2>
          <p>{post.subtitle}</p>
        </div>
        <div className="sibling-nav">
          {previous && (
            <div className="previous">
              <p>DỰ ÁN TRƯỚC</p>
              <Link to={`/du-an/${previous.file_name}`}>
                <h4>{previous.title}</h4>
              </Link>
            </div>
          )}
          <div className="link-all">
            <FiGrid size={26} />
            <Link to={`/du-an/`}>
              <h4>Xem Tất Cả</h4>
            </Link>
          </div>
          {next && (
            <div className="next">
              <p>DỰ ÁN TIẾP THEO</p>
              <Link to={`/du-an/${next.file_name}`}>
                <h4>{next.title}</h4>
              </Link>
            </div>
          )}
        </div>
      </WidthConstraint>
      <div className="background-filter"></div>

      <Footer />
    </div>
  );
};

export default DesignTemplate;
