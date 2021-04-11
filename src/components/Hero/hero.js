import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./hero.css";

function Hero() {
    const location = useLocation();
    return (
        <div className="main">
            <div className="columns">
                <section className="hero is-bold is-large column is-6 has-text-centered bg">
                    <div className="hero-body herotext">
                        <div className="container herotext">
                            <h1 className="title herotitletext">
                                Pet Sitting</h1>
                            <h2 className="subtitle herosubtitletext"> Dogs | Cats | Housesitting </h2>
                            <Link id="detailsbutton" to="/sitting" className={location.pathname === "/sitting"}>
                                <button class="button is-outlined deatilsbutton ">Details</button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="hero is-light is-large column is-6 has-text-centered">
                    <div className="hero-body bg2">
                        <div className="container">
                            <h1 className="title herotitletext ">Dog Walking </h1>
                            <h2 className="subtitle subtitletext "> Dog Walking | Potty Breaks </h2>
                            <Link id="detailsbutton" to="/walking" className={location.pathname === "/walking"}>
                                <button class="button is-outlined detailsbutton">Details</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default Hero;
