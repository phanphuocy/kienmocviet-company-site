import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { useTransition, animated } from "react-spring";

import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import shuffle from "lodash/shuffle";
import "./DesignCarousel.scss";

const DesignCarousel = () => {
  const data = useStaticQuery(graphql`
    query AllThumbs {
      allThumbnailsJson {
        nodes {
          src {
            sharp: childImageSharp {
              fixed(width: 300) {
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
  const images = data.allThumbnailsJson.nodes.map(each => ({
    fluid: each.src.sharp.fixed,
    height: each.src.sharp.fixed.height,
    categories: each.categories,
    id: each.id,
    slug: each.slug,
    label: each.label
  }));
  //
  const columns = 2;
  const width = 766;
  const [items, set] = useState(images);

  //   // Hook4: shuffle data every 2 seconds
  //   useEffect(
  //     () =>
  //       void setInterval(() => {
  //         set(shuffle(items));
  //         console.log(shuffle(items));
  //         console.log("Shuffled");
  //       }, 40000),
  //     []
  //   );
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
    console.log(`And the width is ${300} and height ${child.height}`);
    console.log(`----------------`);
    return { ...child, xy, width: 600 / columns, height: child.height };
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
    <div className="container" style={{ height: Math.max(...heights) }}>
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
      {transitions.map(({ item, props: { xy, ...rest }, key }) => (
        <animated.div
          key={key}
          style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
            ...rest
          }}
        >
          <div>
            <Img
              fixed={item.fluid}
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
