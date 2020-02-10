import React from "react";
import BackgroundImage from "gatsby-background-image";
import "./SubPageHeroImage.scss";

const PageHeroImage = ({ imageFluid, altText }) => {
  return (
    <div className="sub-page-hero">
      <BackgroundImage
        fluid={imageFluid}
        alt={altText}
        style={{ minHeight: "100%" }}
      >
      </BackgroundImage>
    </div>
  );
};

export default PageHeroImage;
