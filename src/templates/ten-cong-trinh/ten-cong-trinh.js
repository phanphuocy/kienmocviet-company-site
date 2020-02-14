import React from "react";
import { Link } from "gatsby"
import "./ten-cong-trinh.scss"
import Header from "../../components/reusable/Header/Header";
import PageHeroImage from "../../components/reusable/PageHeroImage/PageHeroImage";
import Img from "gatsby-image"

// Import custom components
import WidthConstraint from "../../components/reusable/WidthConstraint/WitdhConstraint";

export const query = graphql`
  query($name: String) {
    jsonFile(file_name: { eq: $name }) {
      id
      file_name
      file_type
      title
      sections {
        paragraph
        imageSet {
          label
          source {
            sharp: childImageSharp {
              fluid (maxWidth: 600, maxHeight: 400){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      info {
        area
        investor
        scale
      }
    }
  }
`;

const ProjectTemplate = ({ children, data: { jsonFile: post } }) => {

  return (
    <div>
      <Header />
      <PageHeroImage querySlug="curvy-gold" />
      <WidthConstraint maxWidth="laptop">
        <p className="title-nav">
          <Link to="/">
            <span>Trang Chủ/ </span>
          </Link>{" "}
          <Link to="/cong-trinh/">
            <span>Cong Trinh</span>
          </Link>
        </p>
        <h1>{post.title}</h1>
        <div>
          <p>Chu dau tu: {post.info.investor}</p>
        </div>
        {post.sections.map(section => (<div className="section" key={section.paragraph.substring(0, 10)}>
          <p>{section.paragraph}</p>
          <div>
            {section.imageSet.map(image => (<Img key={image.source.id} className="post-image" fluid={image.source.sharp.fluid} alt={image.label} />))}
          </div>
        </div>))}
      </WidthConstraint>

    </div>
  );
};

export default ProjectTemplate;
