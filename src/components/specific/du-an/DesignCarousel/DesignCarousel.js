import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { useTransition, animated } from "react-spring";

// Import hooks
import useMediaQueries from "../../../../hooks/use-media-queries";
import useMeasure from "../../../../hooks/use-measure";

import Img from "gatsby-image";
import "./DesignCarousel.scss";

const DesignCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      jsonFile(file_name: { eq: "design-works" }) {
        categories {
          slug
          label
        }
        items {
          categories
          slug
          label
          src {
            sharp: childImageSharp {
              fluid(maxWidth: 533, maxHeight: 355) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const images = data.jsonFile.items.map(each => ({
    fluid: each.src.sharp.fluid,
    height: 400,
    categories: each.categories,
    slug: each.slug,
    id: each.slug,
    label: each.label
  }));

  const categories = data.jsonFile.categories;
  console.log(categories);
  //
  // Hook1: Tie media queries to the number of columns
  const columns = useMediaQueries(
    ["(min-width: 1200px)", "(min-width: 576px)", "(min-width: 320px)"],
    [3, 2, 1],
    1
  );
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();

  // Hook3: Hold items
  const [items, set] = useState(images);

  const filterImages = condition => {
    console.log(`going to compare to ${condition}`);
    if (condition === "all") {
      set(images);
      return;
    }
    set(images.filter(image => image.categories === condition));
  };
  //
  let heights = new Array(columns).fill(0);

  let gridItems = items.map((child, i) => {
    const columnIndex = heights.indexOf(Math.min(...heights));
    const xy = [
      (width / columns) * columnIndex,
      (heights[columnIndex] += child.height) - child.height
    ];
    return { ...child, xy, width: width / columns, height: child.height };
  });

  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item.id, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  });

  return (
    <div {...bind} className="container">
      <div className="selectors">
        {categories.map(each => (
          <button key={each.slug} onClick={() => filterImages(each.slug)}>
            {each.label}
          </button>
        ))}
      </div>
      <div
        className="carousel"
        style={{ minHeight: "75vh", height: Math.max(...heights) }}
      >
        {transitions.map(({ item, props: { xy, height, ...rest }, key }) => (
          <animated.div
            key={key}
            style={{
              height,
              padding: "9px",
              transform: xy.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
              ...rest
            }}
          >
            <div className="card">
              <div className="image-frame-flex">
                <Img fluid={item.fluid} alt={item.label} />
              </div>
              <div className="text-frame">
                <h4>{item.label}</h4>
                <p>{item.categories}</p>
              </div>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default DesignCarousel;
