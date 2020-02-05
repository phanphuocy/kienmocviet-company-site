import React from "react"
import { Link } from "gatsby"

import Layout from "../components/reusable/Layout/layout"

import BlogPreviewCard from "../components/specific/blog/BlogPreviewCard/BlogPreviewCard"
import Hero from "../components/hero"

import useBlogs from '../hooks/use-blogs'

const IndexPage = () => {
  const blogs = useBlogs();

  return (
    <React.Fragment>
      <Hero />
      < Layout >
        <h1>This is the blog</h1>
        {blogs.map(blog => (
          <BlogPreviewCard key={blog.slug} post={blog} />
        ))}
      </Layout >
    </React.Fragment>
  )
}

export default IndexPage
