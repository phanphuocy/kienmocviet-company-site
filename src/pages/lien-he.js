import React from "react";
import { Link } from "gatsby";
import styles from "../styles/pages/lien-he.module.scss";

// Import icons
import { FiMap, FiMail, FiPhone } from "react-icons/fi";
import { IconContext } from "react-icons";

// Import custom components
import Header from "../components/reusable/Header/Header";
import Footer from "../components/reusable/Footer/Footer";
import WidthConstraint from "../components/reusable/WidthConstraint/WitdhConstraint";
import MapBox from "../components/specific/lien-he/MapBox/MapBox";

//
const AddressLine = ({ children, icon }) => (
  <div className={styles.addressLine}>
    <IconContext.Provider
      value={{
        size: "1.4rem",
        color: "black",
        style: { verticalAlign: "middle" }
      }}
    >
      <div>{icon}</div>
    </IconContext.Provider>
    <p>{children}</p>
  </div>
);

const ContactPage = () => (
  <React.Fragment>
    <Header />
    <MapBox />
    <WidthConstraint>
      <div className={styles.wrapper}>
        <address className={styles.contacts}>
          <h1>Lien He</h1>
          <AddressLine icon={<FiMap />}>
            <p>126/25/17 Thới An 28, Phường Thới An, Quận 12, TP.HCM</p>
          </AddressLine>
          <AddressLine icon={<FiMap />}>
            <p>
              72/2/9 Huynh Van Nghe, Ward 15, Tan Binh Dist., Ho Chi Minh City
            </p>
          </AddressLine>
          <AddressLine icon={<FiMail />}>
            <p>iaicorporation@gmail.com</p>
          </AddressLine>
          <AddressLine icon={<FiPhone />}>
            <p>(028) 2216 4463</p>
          </AddressLine>
        </address>
        <div className={styles.employ}>
          <h1>Tuyen Dung</h1>
          <p>
            Nulla ad sunt est dolor pariatur consequat aliquip do eu.
            Adipisicing consectetur officia Lorem ea esse ex cillum cillum
            magna. Minim voluptate quis aliqua esse dolor esse.
          </p>
        </div>
      </div>
    </WidthConstraint>
    <Footer />
  </React.Fragment>
);

export default ContactPage;
