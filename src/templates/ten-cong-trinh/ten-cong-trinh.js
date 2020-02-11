import React from "react";
import Header from "../../components/reusable/Header/Header";
import PageHeroImage from "../../components/reusable/PageHeroImage/PageHeroImage";

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
              fluid {
                src
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

const ProjectTemplate = ({ children, data }) => {
  return (
    <div>
      <Header />
      <PageHeroImage querySlug="curvy-gold" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ProjectTemplate;
