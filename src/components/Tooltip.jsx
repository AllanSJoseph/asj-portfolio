import React from "react";
import './componentStyles/Tooltip.css';

const Tooltip = ({ text, show }) => {
    return(
        show && (
            <div className="bottom-tooltip">
                {text}
            </div>
        )
    );
};

export default Tooltip;