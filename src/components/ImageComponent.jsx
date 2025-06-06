import React from 'react';
import { useEffect, useState } from 'react';
import {IKImage} from 'imagekitio-react';
import {urlEndpoint, publicKey} from "../config/imagekit.js";

const responsiveMap = {
    mobile: [
      { width: 400, height: 300 },
      { quality: "70" },
      { format: "webp" }
    ],
    tablet: [
      { width: 800, height: 600 },
      { quality: "80" },
      { format: "webp" }
    ],
    desktop: [
      { width: 1200, height: 742 },
      { quality: "90" },
      { format: "webp" }
    ],
};


const useResponsiveBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState("desktop");
  
    useEffect(() => {
      const checkBreakpoint = () => {
        const width = window.innerWidth;
        if (width < 600) setBreakpoint("mobile");
        else if (width < 1024) setBreakpoint("tablet");
        else setBreakpoint("desktop");
      };
  
      checkBreakpoint(); // check on load
      window.addEventListener("resize", checkBreakpoint);
      return () => window.removeEventListener("resize", checkBreakpoint);
    }, []);
  
    return breakpoint;
};


const ImageComponent = ({ url, context = "thumbnail" }) => {
    const breakpoint = useResponsiveBreakpoint();
    const transformation = responsiveMap[breakpoint];


    if (context === "thumbnail") {
       return (
        <IKImage
            urlEndpoint={urlEndpoint}
            publicKey={publicKey}
            path={url}
            alt="Image from ImageKit"
            transformation={[
                { height: "240", width: "360" },
                { quality: "80" },
                { format: "png" }
            ]}
            loading="lazy"
        />
    ); 
    } else if (context === "carousel"){
        return (
            <IKImage
                key={url}
                urlEndpoint={urlEndpoint}
                publicKey={publicKey}
                path={url}
                alt="Image from ImageKit"
                transformation={transformation}
                className='carousel-img'
                loading="lazy"
            />
        );
        
    }
    
};


export default ImageComponent;