import React from "react";
import Img from "gatsby-image";

import BackgroundImage from "gatsby-background-image";
import "./PageHeroImage.scss";

const PageHeroImage = ({ imageFluid, altText, pageTitle }) => {
  return (
    <div className="page-hero">
      <BackgroundImage
        fluid={imageFluid}
        alt={altText}
        style={{ minHeight: "100%" }}
      >
        <div className="title-wrap">
          <div className="title-frame">
            <h1>{pageTitle}</h1>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default PageHeroImage;
