import React from 'react';
import logoimg from "../../images/pawlogo.PNG";
import { Link, useLocation } from "react-router-dom";
import "./logo.css";

function Logo() {
    const location = useLocation();
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-full">
                    <h1 className="logo has-text-centered">
                        <Link to="/" className={location.pathname === "/"}>
                            <img src={logoimg} alt="pawsaligned" className="logoimg" id="branding" />
                        </Link>
                    </h1>
                    </div>
            </div>
        </div>
    )
};

export default Logo;
