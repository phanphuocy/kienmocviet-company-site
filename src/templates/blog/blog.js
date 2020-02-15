import React from "react";
import { graphql, Link } from "gatsby";
import "./blog.scss";
import { MDXRenderer } from "gatsby-plugin-mdx";

// Import custom components
import Header from "../../components/reusable/Header/Header";
import WidthConstraint from "../../components/reusable/WidthConstraint/WitdhConstraint";
import HeroImage from "../../components/reusable/HeroImage/HeroImage";

export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        author
        title
        feature_image {
          sharp: childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;

const BlogTemplate = ({ data: { mdx: post } }) => {
  return (
    <React.Fragment>
      <Header />
      <HeroImage
        imageFluid={post.frontmatter.feature_image.sharp.fluid}
        altText="aa"
      />
      <WidthConstraint maxWidth="alt-laptop">
        <div className="offset">
          <p className="title-nav">
            <Link to="/">
              <span>Trang Chủ/ </span>
            </Link>{" "}
            <Link to="/blog/">
              <span>Bài Viết</span>
            </Link>
          </p>
          <h1 className="blog-title">{post.frontmatter.title}</h1>
          <p className="blog-author">Post by: {post.frontmatter.author}</p>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </WidthConstraint>
    </React.Fragment>
  );
};

export default BlogTemplate;
