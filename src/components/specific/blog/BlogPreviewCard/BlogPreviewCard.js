import React from "react";

import { Link } from "gatsby";
import styles from "./BlogPreviewCard.module.scss";
import Image from "gatsby-image";

const BlogPreviewCard = ({ post }) => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.thumbnail}`}>
        <Link to={`/blog/${post.slug}`}>
          <Image
            alt={post.title}
            fluid={post.image.sharp.fluid}
            style={{ height: "100%" }}
          />
        </Link>
      </div>
      <div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`}>Read this post</Link>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
