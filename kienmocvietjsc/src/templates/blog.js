import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/reusable/Layout/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"

export const query = graphql`
    query ($slug: String) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
            id
            frontmatter {
                author
                title
            }
            body
        }
    }
`

const BlogTemplate = ({ data: { mdx: post } }) => {
    return (
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            <small>Post by: {post.frontmatter.author}</small>
            <MDXRenderer>
                {post.body}
            </MDXRenderer>
        </Layout>)
}

export default BlogTemplate;