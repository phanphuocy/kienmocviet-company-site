import React, { useRef } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import "./ten-du-an.scss";
import { Link } from "gatsby";

// Import spring
import { useSprings, animated } from "react-spring";
import clamp from "lodash/clamp";
import useMeasure from "../../hooks/use-measure";

// Import custom components
import Header from "../../components/reusable/Header/Header";
import WidthConstraint from "../../components/reusable/WidthConstraint/WitdhConstraint";

export const query = graphql`
  query($name: String) {
    post: jsonFile(file_type: { eq: "ten-du-an" }, file_name: { eq: $name }) {
      file_name
      title
      sections {
        name
        slug
        imageSet {
          label
          source {
            sharp: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    hero: jsonFile(items: { elemMatch: { slug: { eq: "school-in-kyoto" } } }) {
      file_name
      file_type
      items {
        label
        src {
          sharp: childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const DesignTemplate = ({ data }) => {
  const { hero, post } = data;

  const selectors = post.sections.map(each => ({
    name: each.name,
    slug: each.slug
  }));
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();

  //
  const index = useRef(0);
  const [springs, set] = useSprings(post.sections.length, i => ({
    x: i * width,
    display: "block"
  }));
  const transform = () => {
    set(i => {
      const x = (i - index.current) * width;
      console.log(`element number ${i + 1} has position x: ${x}`);

      if (i < index.current - 1 || i > index.current + 1)
        return { x, display: "none" };
      return { x, display: "block" };
    });
  };

  const selectHandler = slug => {
    index.current = selectors.findIndex(each => each.slug === slug);
    console.log("current index", index.current);
    transform();
  };

  const incrementIndex = () => {
    index.current++;
    index.current = clamp(index.current, 0, post.sections.length - 1);
    console.log(`Increment index, current: ${index.current}`);
    transform();
  };
  const decrementIndex = () => {
    index.current--;
    index.current = clamp(index.current, 0, post.sections.length - 1);
    console.log(`Decrement index, current: ${index.current}`);
    transform();
  };

  return (
    <div className="ten-du-an" {...bind}>
      {/* <pre>{JSON.stringify(selectors, null, 2)}</pre> */}
      <Header />
      {/* <BackgroundImage
        fluid={hero.items[2].src.sharp.fluid}
        altText={hero.items[2].label}
      > */}
      <WidthConstraint>
        <p className="title-nav">
          <Link to="/">
            <span>Trang Chủ/ </span>
          </Link>{" "}
          <Link to="/du-an/">
            <span>Dự Án</span>
          </Link>
        </p>
        <h1 className="post-title">{post.title}</h1>
        <div className="selectors-group">
          {selectors.map(button => (
            <button onClick={() => selectHandler(button.slug)}>
              {button.name}
            </button>
          ))}
        </div>
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
        <div className="slide-show" style={{ height: "800px" }}>
          {springs.map(({ x, display }, i) => (
            <animated.div
              {...transform()}
              key={i}
              style={{
                display,
                transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
              }}
            >
              <div className="slide">
                <div className="image-container" key={post.sections[i].slug}>
                  {post.sections[i].imageSet.map(image => (
                    <div className="single-image" key={image.label}>
                      <div className="image-frame">
                        <Img fluid={image.source.sharp.fluid} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </animated.div>
          ))}
        </div>
        {/* {post.sections.map(slide => (
            <div className="slide" style={{ border: "1px solid white" }}>
              <h1>{slide.name}</h1>
              <div className="image-container" key={slide.slug} style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
                {slide.imageSet.map(image => (
                  <div className="single-image" >
                    <Img fluid={image.source.sharp.fluid} />
                  </div>
                ))}
              </div>
            </div>
          ))} */}
        <p>This is a paragraph</p>
      </WidthConstraint>
      <div className="background-filter"></div>
      {/* </BackgroundImage> */}
    </div>
  );
};

export default DesignTemplate;
