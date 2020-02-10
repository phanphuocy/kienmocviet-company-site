import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const useHeroImage = (slug) => {
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

export default useHeroImage
