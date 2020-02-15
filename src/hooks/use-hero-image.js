import { graphql, useStaticQuery } from "gatsby";

const useHeroImage = slug => {
  const data = useStaticQuery(graphql`
    query {
      jsonFile(file_name: { eq: "hero-images" }) {
        items {
          slug
          label
          src {
            sharp: childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 768) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return data.jsonFile.items.find(image => image.slug === slug);
};

export default useHeroImage;
