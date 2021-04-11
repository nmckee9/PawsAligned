import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    const location = useLocation();
    const [isActive, setisActive] = React.useState(false);
    return (
        <div>
            <nav className="navbar">
                <a className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a
                            onClick={() => {
                                setisActive(!isActive);
                            }}
                            role="button"
                            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                            aria-label="menu"
                            aria-expanded="true"
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbar" className={`navbar-menu ${isActive ? "is-active" : "/"}`}>
                        <div className="navbar-start">
                            <Link to="/" className={location.pathname === "/"}>
                                <a className="link is-info navbartext PAlink"> Paws Aligned </a>
                            </Link>
                            <Link to="sitting" className={location.pathname === "sitting"}>
                                <a class="navbar-item">
                                    Pet Sitting</a>
                            </Link>
                            <Link to="walking" className={location.pathname === "walking"}>
                                <a class="navbar-item">
                                    Dog Walking</a>
                            </Link>
                            <Link to="about" className={location.pathname === "about"}>
                                <a class="navbar-item">
                                    About</a>
                            </Link>
                        </div>
                    </div>
                </a>
            </nav>
        </div>

    )
};

export default Navbar;