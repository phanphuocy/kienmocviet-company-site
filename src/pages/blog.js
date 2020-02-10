import React from "react";
import { Link } from "gatsby";

import Layout from "../components/reusable/Layout/layout";

import BlogPreviewCard from "../components/specific/blog/BlogPreviewCard/BlogPreviewCard";
import Hero from "../components/hero";

// Import custom components
import Header from "../components/reusable/Header/Header";
import WidthContraint from "../components/reusable/WidthConstraint/WitdhConstraint";
import PageHeroImage from "../components/reusable/PageHeroImage/PageHeroImage";

import useBlogs from "../hooks/use-blogs";

const BlogPage = ({ data }) => {
  const heroImageFluid = data.jsonFile.items.find(
    image => image.slug === "centric-abstract"
  );
  const blogs = useBlogs();

  return (
    <React.Fragment>
      <Header />
      <PageHeroImage
        imageFluid={heroImageFluid.src.sharp.fluid}
        altText={heroImageFluid.label}
        pageTitle="BLOG"
      />
      <WidthContraint>
        <h1>This is the blog</h1>
        {blogs.map(blog => (
          <BlogPreviewCard key={blog.slug} post={blog} />
        ))}
      </WidthContraint>
    </React.Fragment>
  );
};

export const pageQuery = graphql`
  query {
    jsonFile(file_name: { eq: "hero-images" }) {
      items {
        label
        slug
        src {
          sharp: childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
