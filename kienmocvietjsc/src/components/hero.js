import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import "./hero.scss"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "alex-wong-cool.jpg"}) {
                sharp: childImageSharp {
                fluid {
                    src
                    srcWebp
                    srcSet
                }
                }
            }              
        }    
    `)
    return (
        <BackgroundImage Tag="div" fluid={image.sharp.fluid}>
            <h1>Heading: Blog</h1>
            <p>Hello from Gatsby.</p>
        </BackgroundImage>
    )
}

export default Hero
