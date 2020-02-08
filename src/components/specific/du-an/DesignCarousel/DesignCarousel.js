import React, { useState, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { useTransition, animated } from "react-spring";

// Import hooks
import useMediaQueries from "../../../../hooks/use-media-queries";
import useMeasure from "../../../../hooks/use-measure";

import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import shuffle from "lodash/shuffle";
import "./DesignCarousel.scss";

const DesignCarousel = () => {
  const data = useStaticQuery(graphql`
    query allDesignWorks {
      allDesignWorksJson {
        nodes {
          src {
            sharp: childImageSharp {
              fixed(width: 400, height: 400, jpegQuality: 100) {
                base64
                src
                srcSet
                srcSetWebp
                srcWebp
                width
                height
              }
            }
          }
          categories
          id
          slug
          label
        }
      }
    }
  `);

  const images = data.allDesignWorksJson.nodes.map(each => ({
    fixed: each.src.sharp.fixed,
    height: each.src.sharp.fixed.height,
    categories: each.categories,
    id: each.id,
    slug: each.slug,
    label: each.label
  }));
  //
  // Hook1: Tie media queries to the number of columns
  const columns = useMediaQueries(
    ["(min-width: 1200px)", "(min-width: 769px)", "(min-width: 320px)"],
    [3, 2, 1],
    1
  );
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();

  // Hook3: Hold items
  const [items, set] = useState(images);

  const shuffleImages = () => {
    set(shuffle(items));
  };
  //
  let heights = new Array(columns).fill(0);
  let gridItems = items.map((child, i) => {
    const columnIndex = heights.indexOf(Math.min(...heights));
    const xy = [
      (width / columns) * columnIndex,
      (heights[columnIndex] += child.height) - child.height
    ];
    console.log(
      `Card ${child.label} will be placed in column number ${columnIndex + 1}`
    );
    console.log(
      `The current height of column ${columnIndex + 1} is ${
        heights[columnIndex]
      }`
    );
    console.log(`This card x position: ${xy[0]} and y position: ${xy[1]}`);
    console.log(
      `And the width is ${width / columns} and height ${child.height}`
    );
    console.log(`----------------`);
    return { ...child, xy, width: width / columns, height: child.height };
  });
  console.log("Grid Items:", gridItems);
  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item.id, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  });

  return (
    <div
      {...bind}
      className="container"
      style={{ height: Math.max(...heights) }}
    >
      <button
        onClick={() => {
          shuffleImages();
        }}
      >
        Shuffle
      </button>
      {/* {items.map(each => (
        <div className="card" key={each.slug}>
          <Img fluid={each.fluid} alt={each.label} />
        </div>
      ))} */}
      {transitions.map(({ item, props: { xy, height, ...rest }, key }) => (
        <animated.div
          key={key}
          style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
            ...rest
          }}
        >
          <div className="image-frame">
            <Img
              fixed={item.fixed}
              alt={item.label}
              style={{
                width: "100%"
              }}
            />
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default DesignCarousel;
