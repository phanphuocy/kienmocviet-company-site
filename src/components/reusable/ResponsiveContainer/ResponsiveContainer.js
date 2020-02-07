import React from 'react';
import "./ResponsiveContainer.scss";

const ResponsiveContainer = (props) => {
    return (
        <div className="responsive-container">
            {props.children}
        </div>
    )
}

export default ResponsiveContainer
