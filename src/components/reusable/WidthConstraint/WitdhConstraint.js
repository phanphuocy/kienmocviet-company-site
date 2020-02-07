import React from 'react';
import "./WidthConstraint.scss";

// This component is used for text, div that need to be viewed as much comforable as possible
const WidthConstraint = (props) => {
    return (
        <div className="width-constraint">
            {props.children}
        </div>
    )
}

export default WidthConstraint
