import React from "react";
import "./WidthConstraint.scss";
import PropTypes from "prop-types";

// This component is used for text, div that need to be viewed as much comforable as possible
const WidthConstraint = ({ maxWidth, children }) => (
  <div className={`width-constraint max-${maxWidth}`}>{children}</div>
);

WidthConstraint.propTypes = {
  maxWidth: PropTypes.string
};

export default WidthConstraint;
