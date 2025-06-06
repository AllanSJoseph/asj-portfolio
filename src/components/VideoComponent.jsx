import React from "react";
import './componentStyles/VideoComponent.css'

const VideoComponent = ({ src = "" }) => {

    if (src === "") {
        return(
            <div className="video-error">
                <h4>No Demo</h4>
                <p>This project does not feature a demo</p>
            </div>
        );
    }

    return(
        <>
        <iframe 
            width="560" 
            height="315" 
            src={src} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </>
    )
}

export default VideoComponent;