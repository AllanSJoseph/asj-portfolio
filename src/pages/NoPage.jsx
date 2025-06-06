import React from "react";
import {Link} from "react-router-dom";
import './pageStyles/NoPage.css';

function NoPage() {
    return (
        <>
            <div className="page-not-found">
                <h1 className="page-not-found-code">404</h1>
                <h2 className="page-not-found-title">Page Not Found</h2>
                <p className="page-not-found-desc">Oops!! The page you are looking for maybe moved, deleted or never even existed! <br/> Don't worry, you can go to my homepage or navigation above to access my pages.</p>

                <Link to="/">
                    <button className="jump-to-home">Visit My Homepage</button>
                </Link>
            </div>
        </>
    )
}

export default NoPage;