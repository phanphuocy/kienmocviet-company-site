import React from "react";
import styles from "./Footer.module.scss";

// Import Gatsby
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby";

// Import custom Components
import WidthConstraint from "../WidthConstraint/WitdhConstraint";

// Import Hooks
import useHeroImage from "../../../hooks/use-hero-image";

const SitemapItems = () => (
  <ul>
    <li>
      <Link to="/ve-chung-toi">Về Chúng Tôi</Link>
    </li>
    <li>
      <Link to="/du-an/">Du An</Link>
    </li>
    <li>
      <Link to="/cong-trinh/">Cong Trinh</Link>
    </li>
    <li>
      <Link to="/lien-he">Lien He</Link>
    </li>
    <li>
      <Link to="/blog/">Bai Viet</Link>
    </li>
    <li>
      <Link to="/du-an/school-in-saigon">Ten Du An</Link>
    </li>
    <li>
      <Link to="/cong-trinh/vegan-house">Ten Cong Trinh</Link>
    </li>
  </ul>
);

const Footer = () => {
  const bgImage = useHeroImage("sky-blue-white-columns");
  console.log(bgImage);
  return (
    <footer className={styles.footer}>
      <BackgroundImage
        Tag="section"
        className="footer-bg-image"
        fluid={bgImage.src.sharp.fluid}
        backgroundColor={`#eee`}
      >
        <WidthConstraint>
          <div className={styles.wrapper}>
            <div className={styles.contacts}>
              <div className={styles.callToActionText}>
                <h1>New! Get 20x faster builds with Gatsby Cloud!</h1>
              </div>
              <form action="" method="get" className={styles.form}>
                <p>
                  Gatsby is a free and open source based on React that helps
                  developers build blazing fast websites and apps
                </p>
                <div className={styles.constraint}>
                  <div className={styles.formField}>
                    <label className={styles.radio}>
                      Anh
                      <input type="radio" name="gender" />
                      <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.radio}>
                      Chị
                      <input type="radio" name="gender" />
                      <span className={styles.checkmark}></span>
                    </label>
                    <input
                      className={styles.nameInput}
                      placeholder="Tên"
                      type="text"
                      name="name"
                      id="name"
                      required
                    />
                  </div>
                  <div className={styles.formField}>
                    <input
                      className={styles.emailInput}
                      type="email"
                      placeholder="Email hoăc SĐT"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <input type="submit" value="Subscribe!" />
                </div>
              </form>
            </div>
            <div className={styles.footerGrid}>
              <div className={styles.footerTitle}>
                <h3>IAI Corporation.</h3>
                <h1>IAI Corporation.</h1>
              </div>
              <div className={styles.addressGroup}>
                <ul>
                  <li>
                    Trụ sở chính : 71/17 D1, Phường 25, quận Bình Thạnh, Tp HCM
                  </li>
                  <li>
                    Văn phòng đại diện : 108 Nguyên Hồng, Phường 1, Quận Gò Vấp
                  </li>
                  <li>Điện thoại 1: 0937 347 297 (Mr)</li>
                  <li>Điện thoại 2: 0934 000 111 (Mr)</li>
                  <li>Email: aaaaaaaaaa@gmail.com</li>
                  <li>Website: aaaaaaaajsc.com</li>
                  <li>Facebook: www.facebook.com/aaaaaaaa.JSC</li>
                </ul>
              </div>
              <div className={styles.sitemap}>
                <h6>Sitemap</h6>
              </div>
              <div className={styles.sitemapItems}>
                <SitemapItems />
              </div>
              <div className={styles.connect}>
                <h6>Ket Noi Voi Chung Toi</h6>
              </div>
              <div className={styles.conntectItems}>
                <h5>FACEBOOK</h5>
                <p>agkans asf asj asfk nasf alsf</p>
                <h5>GOOGLE</h5>
                <p>agkans asf asj asfk nasf alsf</p>
              </div>
            </div>
          </div>
        </WidthConstraint>
      </BackgroundImage>
    </footer>
  );
};

export default Footer;
