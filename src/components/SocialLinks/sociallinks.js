import React from 'react';
import "./sociallinks.css";

function Social() {
    return (
        <section className="hero">
            <div id="social" className="hero-body is-full">
                <div className="container">
                    <div className="columns">
                        <div className="column is-full social">
                            <a id="instalink" class="link is-info navbartext" href="https://www.instagram.com/paws_aligned/" target="_blank">
                                <span class="iconify" data-icon="carbon:logo-instagram" data-inline="false"></span>
                            </a>
                            <a className="link is-info navbartext">
                                <span id="emaillink" class="iconify" data-icon="bytesize:mail" data-inline="false"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
};

export default Social;
