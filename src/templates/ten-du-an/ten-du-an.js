import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/reusable/Layout/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Image from "gatsby-image";

export const query = graphql`
  query($name: String) {
    jsonFile(file_type: { eq: "ten-du-an" }, file_name: { eq: $name }) {
      file_name
      sections {
        name
        slug
      }
    }
  }
`;

const BlogTemplate = ({ data }) => {
  const post = data.jsonFile;
  return (
    <Layout>
      <h1>{post.file_name}</h1>
    </Layout>
  );
};

export default BlogTemplate;
