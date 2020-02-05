import React from "react"
import { Link } from "gatsby"

import Layout from "../components/reusable/Layout/layout"

import useBlogs from '../hooks/use-blogs'

const IndexPage = () => {
  const blogs = useBlogs();

  return (
    < Layout >
      <h1>This is the blog</h1>
      {blogs.map(blog => (
        <pre>{JSON.stringify(blog, null, 2)}</pre>
      ))}
    </Layout >
  )
}

export default IndexPage
