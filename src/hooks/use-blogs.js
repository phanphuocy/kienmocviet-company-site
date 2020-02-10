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
                image :feature_image {
                    sharp: childImageSharp {
                        fluid(
                            maxWidth: 400
                            maxHeight: 300
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
