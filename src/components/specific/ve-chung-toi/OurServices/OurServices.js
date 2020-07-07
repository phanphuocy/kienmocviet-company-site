import React from "react";
import styles from "./OurServices.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const OurServices = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero-images/randy-fath.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <React.Fragment>
      <BackgroundImage fluid={data.file.sharp.fluid}>
        <div className={styles.filter}></div>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h2>Dịch Vụ Của Chúng Tôi</h2>
          </div>
          <div className={styles.services}>
            <div className={styles.item}>
              <p>Thiết kế thi công trang trí nội ngoại thất.</p>
            </div>
            <div className={styles.item}>
              <p>
                Thi công và xây dựng các công trình dân dụng và công nghiệp.
              </p>
            </div>
            <div className={styles.item}>
              <p>Tư vấn, thiết kế công trình dân dụng và công nghiệp.</p>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <div className={styles.team}>
        <p>
          Ea aute occaecat esse cupidatat et culpa commodo amet qui. Occaecat
          laborum mollit labore irure elit anim cupidatat occaecat elit
          exercitation incididunt.
        </p>
      </div>
    </React.Fragment>
  );
};

export default OurServices;
