import React from 'react';
import styles from "./Footer.module.scss";

// Import Gatsby
import BackgroundImage from 'gatsby-background-image';

// Import custom Components
import WidthConstraint from "../WidthConstraint/WitdhConstraint";

// Import Hooks
import useHeroImage from "../../../hooks/use-hero-image";

const Footer = () => {
    const bgImage = useHeroImage('sky-blue-white-columns');
    console.log(bgImage)
    return (
        <footer className={styles.footer}>
            <BackgroundImage Tag="section"
                className="footer-bg-image"
                fluid={bgImage.src.sharp.fluid}
                backgroundColor={`#eee`}>
                <WidthConstraint>
                    <div className={styles.wrapper}>
                        <div className={styles.contacts}>
                            <div className={styles.callToActionText}>
                                <h1>New! Get 20x faster builds with Gatsby Cloud!</h1>
                            </div>
                            <form action="" method="get" class={styles.form}>
                                <p>Gatsby is a free and open source  based on React that helps developers build blazing fast websites and apps</p>
                                <div className={styles.constraint}>
                                    <div class={styles.formField}>
                                        <label className={styles.radio}>Anh
                                        <input type="radio" name="gender" />
                                            <span className={styles.checkmark}></span>
                                        </label>

                                        <label className={styles.radio}>Chị
                                        <input type="radio" name="gender" />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                        <input className={styles.nameInput} placeholder="Tên" type="text" name="name" id="name" required />
                                    </div>
                                    <div class={styles.formField}>
                                        <input className={styles.emailInput} type="email" placeholder="Email hoăc SĐT" name="email" id="email" required />
                                    </div>
                                    <input type="submit" value="Subscribe!" />
                                </div>
                            </form>
                        </div>
                        <div className={styles.information} >
                            <h3>IAI Corporation.</h3>
                            <ul>
                                <li>HHELE</li>
                                <li>HHELE</li>
                                <li>HHELE</li>
                                <li>HHELE</li>
                            </ul>
                        </div>
                    </div>
                </WidthConstraint>
            </BackgroundImage>

        </footer>
    )
}

export default Footer
