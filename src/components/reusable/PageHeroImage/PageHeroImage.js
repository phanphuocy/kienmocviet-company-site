import React from "react";
import BackgroundImage from "gatsby-background-image";
import "./PageHeroImage.scss";

import useHeroImage from "../../../hooks/use-hero-image";

const PageHeroImage = ({ pageTitle, querySlug }) => {
  const data = useHeroImage(querySlug)
  return (
    <div className="page-hero">
      <BackgroundImage
        fluid={data.src.sharp.fluid}
        alt={data.label}
        style={{ minHeight: "100%" }}
      >
        {pageTitle && (
          <div className="title-wrap">
            <div className="title-frame">
              <h1>{pageTitle}</h1>
            </div>
          </div>
        )}
      </BackgroundImage>
    </div>
  );
};

export default PageHeroImage;
