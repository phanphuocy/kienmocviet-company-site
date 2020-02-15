import React from "react";
import "../styles/pages/blog.scss";

import Img from "gatsby-image";

// Import custom components
import Header from "../components/reusable/Header/Header";
import Footer from "../components/reusable/Footer/Footer";
import WidthContraint from "../components/reusable/WidthConstraint/WitdhConstraint";
import PageHeroImage from "../components/reusable/PageHeroImage/PageHeroImage";
import BlogPreviewCard from "../components/specific/blog/BlogPreviewCard/BlogPreviewCard";

// Import hooks
import useBlogs from "../hooks/use-blogs";

const BlogPage = ({ data }) => {
  const blogs = useBlogs();
  const featurePost = blogs.slice(0, 3);

  return (
    <React.Fragment>
      <Header />
      <PageHeroImage querySlug="centric-abstract" pageTitle="BLOG" />
      <WidthContraint>
        <div className="blog-container">
          <div className="blog-sidebar">
            <div className="feature-blogs">
              <p className="blog-heading">Bai Viet Featured</p>
              {featurePost.map(blog => (
                <div className="feature-single" key={blog.slug}>
                  <Img
                    fluid={blog.image.sharp.fluid}
                    style={{ minHeight: "80px", minWidth: "80px" }}
                  />
                  <p>{blog.title}</p>
                </div>
              ))}
            </div>
            <div className="blog-tag-group">
              <p>Conafaslkfasn</p>
            </div>
          </div>
          <div className="blog-wrap">
            {blogs.map(blog => (
              <BlogPreviewCard key={blog.slug} post={blog} />
            ))}
          </div>
        </div>
      </WidthContraint>
      <Footer />
    </React.Fragment>
  );
};

export default BlogPage;
