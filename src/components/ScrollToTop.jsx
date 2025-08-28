import {useState, useEffect } from "react";
import './componentStyles/ScrollToTop.css'

const ScrollToTop = ({showAfter =  300}) => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > showAfter);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [showAfter]);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        isVisible && (
            <button onClick={scrollToTop} className="scrollbtn" title={"Scroll to Top"}>
                <b>↑</b>
            </button>
        )
    );
};

export default ScrollToTop;