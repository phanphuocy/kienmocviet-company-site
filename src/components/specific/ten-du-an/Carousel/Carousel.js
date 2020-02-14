import React, { useRef, useState } from "react";
import styles from "./Carousel.module.scss";
// import images from "./mockupdata";
import Img from "gatsby-image"

import clamp from 'lodash/clamp'
import { useTransition, animated } from "react-spring";
import { useGesture } from 'react-use-gesture'

import WidthConstraint from "../../../reusable/WidthConstraint/WitdhConstraint"

import useMeasure from "../../../../hooks/use-measure"

const CarouselWithPreview = ({ thumbnails, images }) => {
    const [bind, { width }] = useMeasure();

    const index = useRef(0)

    const thumbnailHeight = (width) => {
        if (width < 767) {
            return width / 4;
        } else if (width >= 768 && width < 1200) {
            return 768 / 4;
        } else if (width >= 1200) {
            return 1200 / 6;
        }
    }
    const thumbnailWidth = (width) => {
        if (width < 767) {
            return width / 4 * 1.5;
        } else if (width >= 768 && width < 1200) {
            return 768 / 4 * 1.5;
        } else if (width >= 1200) {
            return 1200 / 6 * 1.5;
        }
    }
    const [current, setCurrent] = useState(0);

    const transformedData = thumbnails.map((image, i) => {
        let x = (i - current) * thumbnailWidth(width);
        if (i < current - 1 || i > current + 4) {
            return { ...image, x, display: "none", height: thumbnailHeight(width), width: thumbnailWidth(width) }
        }
        return { ...image, x, display: "block", height: thumbnailHeight(width), width: thumbnailWidth(width) }
    })

    console.log(transformedData)
    const changeCurrent = (command) => {
        let change;
        if (typeof command === "string" && command === "increment") {
            change = current + 1;
        } else if (typeof command === "string" && command === "decrement") {
            change = current - 1;
        } else {
            return
        }
        if (change < 0 || change > transformedData.length - 1) {
            return
        }
        setCurrent(change)

    }

    const transitions = useTransition(transformedData, item => item.source.id, {
        from: ({ x, width, height, display }) => ({ x, width, height, display }),
        enter: ({ x, width, height, display }) => ({ x, width, height, display }),
        update: ({ x, width, height, display }) => ({ x, width, height, display }),
        leave: { opacity: 0 },
        config: { mass: 1, tension: 500, friction: 100 },
        trail: 0
    })

    console.log("transitions", transitions)

    ///
    const tagSelectors = [
        {
            slug: "architecture",
            name: "KIEN TRUC"
        },
        {
            slug: "interior",
            name: "NOI THAT"
        }
    ]

    const switchToSelector = (selectorSlug) => {
        if (typeof selectorSlug !== "string") return
        let foundIndex = transformedData.findIndex(item => item.tag === selectorSlug);
        if (foundIndex >= 0) {
            setCurrent(foundIndex)
        } else return
    }
    // SOme interactions
    const switchByKey = (key) => {
        if (typeof key !== "number") return
        setCurrent(key)
    }



    return (
        <div {...bind}>
            <div className={styles.tagsWrap}>
                {tagSelectors.map(button => <button key={button.slug} onClick={() => switchToSelector(button.slug)}>{button.name}</button>)}
            </div>
            <WidthConstraint maxWidth="alt-laptop" >
                <div className={styles.preview}>
                    <div className={styles.fill}>
                        {
                            images[current].source.sharp.fluid ?
                                <Img fluid={images[current].source.sharp.fluid} alt={images[current].source.sharp.fluid} /> : <p>Loading</p>
                        }
                    </div>
                </div>
            </WidthConstraint>
            <button onClick={() => changeCurrent("increment")} >NEXT</button>
            <button onClick={() => changeCurrent("decrement")} >PREVIOUS</button>
            <div className={styles.slider}  >
                <div className={styles.fill}>
                    <div style={{ position: "relative" }}>
                        {transitions.map(({ item, props: { x, display, height, width, ...rest }, key }) =>
                            <animated.div key={key} style={{
                                height: height,
                                width: width,
                                position: "absolute",
                                transform: x.interpolate(
                                    (x) => `translate3d(${x}px,0px,0)`
                                ),
                                ...rest
                            }}>
                                <div onClick={() => switchByKey(key)} className={styles.card} style={{ display: display }} >
                                    {/* <pre>{JSON.stringify(item.label)}</pre> */}
                                    <Img fluid={item.source.sharp.fluid} alt={item.label} />
                                </div>
                            </animated.div>
                        )}

                    </div>
                </div>
            </div>

        </div >
    )
}

export default CarouselWithPreview;