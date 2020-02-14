import { graphql, useStaticQuery } from "gatsby"

const useBackgroundImage = (slug) => {
    const data = useStaticQuery(graphql`
        query  {
            jsonFile(file_name: {eq: "hero-images"}) {
                items {
                    slug
                    label
                    src {
                        sharp: childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }             
        }
    `)

    return data.jsonFile.items.find(image => image.slug === slug)
}

export default useBackgroundImage
