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
        excerpt: eachPost.excerpt
    }))
}

export default useBlogs
