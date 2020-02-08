import React, { useRef } from "react";
import "../styles/pages/cong-trinh.scss";

import { useSprings, animated } from "react-spring";
import { graphql } from "gatsby";

import clamp from "lodash/clamp";

import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

// Import custom components
// import PageHeroImage from "../components/reusable/PageHeroImage/PageHeroImage";
import Header from "../components/reusable/Header/Header";
import WidthConstraint from "../components/reusable/WidthConstraint/WitdhConstraint";

const ProjectPage = ({ children, data }) => {
  const prop = data.allSchoolInMuxikenJson.edges[0].node;
  console.log(prop);

  const index = useRef(0);
  const [springs, set] = useSprings(prop.sections.length, i => ({
    x: i * 768,
    display: "block"
  }));

  const transform = () => {
    set(i => {
      const x = (i - index.current) * 768;
      console.log(`element number ${i + 1} has position x: ${x}`);

      if (i < index.current - 1 || i > index.current + 1)
        return { x, display: "none" };
      return { x, display: "block" };
    });
  };
  const incrementIndex = () => {
    index.current++;
    index.current = clamp(index.current, 0, prop.sections.length - 1);
    console.log(`Increment index, current: ${index.current}`);
    transform();
  };
  const decrementIndex = () => {
    index.current--;
    index.current = clamp(index.current, 0, prop.sections.length - 1);
    console.log(`Decrement index, current: ${index.current}`);
    transform();
  };

  return (
    <div className="this-page">
      <Header />
      {/* <BackgroundImage
        Tag="section"
        className="background"
        fluid={hero}
        backgroundColor={`#040e18`}
      > */}
      <div className="background-filter"></div>

      <WidthConstraint>
        <h1>{prop.title}</h1>
        <p>
          Dolor ea non duis mollit in dolore officia excepteur esse tempor
          aliqua non non anim. Ut magna et nulla officia eu eu aute dolor do
          commodo laboris cupidatat id. Tempor eu tempor laboris officia. Dolore
          et aliquip eu velit qui mollit nostrud.
          <button
            style={{ width: "30px", marginRight: "10px" }}
            onClick={() => {
              incrementIndex();
            }}
          >
            +
          </button>
          <button
            style={{ width: "30px" }}
            onClick={() => {
              decrementIndex();
            }}
          >
            -
          </button>
        </p>
        <div className="asacontainer">
          {springs.map(({ x, display }, i) => (
            <animated.div
              {...transform()}
              key={i}
              style={{
                display,
                transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
              }}
            >
              <div
                style={{
                  width: "700px",
                  height: "100px",
                  backgroundColor: "#eee"
                }}
              ></div>
            </animated.div>
          ))}

          {/* {prop.sections.map(slide => (
                            <div className="slide" style={{ border: "1px solid white" }}>
                                <h1>{slide.name}</h1>
                                <div className="image-container" key={slide.slug} style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
                                    {slide.imageSet.map(image => (
                                        <div className="single-image" style={{ width: "45%", padding: "15px" }}>
                                            <Img fluid={image.source.sharp.fluid} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))} */}
        </div>
      </WidthConstraint>
      {/* </BackgroundImage> */}
    </div>
  );
};

export const pageQuery = graphql`
  query CongTrinh {
    allSchoolInMuxikenJson {
      edges {
        node {
          title
          sections {
            slug
            name
            imageSet {
              label
              source {
                sharp: childImageSharp {
                  fluid {
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                    base64
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ProjectPage;
