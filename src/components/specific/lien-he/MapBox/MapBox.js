import React from "react";
import styles from "./Mapbox.module.scss";

// Import Google Map React
import GoogleMapReact from "google-map-react";

// Import icon
import { FiMapPin } from "react-icons/fi";

// Import custom components
import WidthConstraint from "../../../reusable/WidthConstraint/WitdhConstraint";

//
const MapPin = ({ text }) => {
  return (
    <div className={styles.mapPin}>
      <FiMapPin size={48} color="white" />
      <p>{text}</p>
    </div>
  );
};

const MapBox = () => {
  const defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 12
  };
  return (
    <div style={{ height: "500px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCVclv1ICuXkVnYqiMMBNkWLwPEGgTO0TM",
          language: "vi"
        }}
        defaultCenter={defaultProps.center}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // onChildMouseEnter={this.onChildMouseEnter}
        // onChildMouseLeave={this.onChildMouseLeave}
      >
        <MapPin text="Main Building" lat={40.73} lng={-73.93} />
        <MapPin text="Preresentative Office" lat={40.72} lng={-73.87} />
      </GoogleMapReact>
    </div>
  );
};

export default MapBox;
