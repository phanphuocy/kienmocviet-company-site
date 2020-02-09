import React from "react";

import { Link } from "gatsby";
import "./BlogPreviewCard.scss";
import Image from "gatsby-image";

const BlogPreviewCard = ({ post }) => {
  return (
    <div className="blog-preview-card">
      <div>
        <Link to={`/blog/${post.slug}`}>
          <Image alt={post.title} fluid={post.image.sharp.fluid} />
        </Link>
      </div>
      <div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link to={`blog/${post.slug}`}>Read this post</Link>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
