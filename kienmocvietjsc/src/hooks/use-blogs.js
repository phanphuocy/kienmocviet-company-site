import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const useBlogs = () => {
    const data = useStaticQuery(graphql`
        query  {
            allMdx {
            nodes {
                frontmatter {
                author
                slug
                title
                image {
                    sharp: childImageSharp {
                        fluid(
                            maxWidth: 100
                            maxHeight: 100
                            duotone: {shadow: "#663399", highlight: "#ddbbff" }
                        ) {
                            srcSet
                            srcWebp
                            src
                            base64
                        }
                    }
                }
                }
                excerpt
            }
            }
        }
    `)
    return data.allMdx.nodes.map(eachPost => ({
        title: eachPost.frontmatter.title,
        author: eachPost.frontmatter.author,
        slug: eachPost.frontmatter.slug,
        image: eachPost.frontmatter.image,
        excerpt: eachPost.excerpt
    }))
}

export default useBlogs
