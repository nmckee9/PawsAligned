import React from "react";
import Navbar from "../../components/Navbar/navbar";
import About from "../../components/About/about";
import Testimonials from "../../components/Testimonials/testimonials";
import Services from "../../components/Services/services";
import FooterBar from "../../components/FooterBar/footerbar";
import FooterBar2 from "../../components/FooterBar2/footerbar2";
import Logo from "../../components/Logo/logo";

function AboutPage() {
    return (
        <div>
            <About />
            <Logo />
            <Navbar />
            <Services />
            <Testimonials />
            <FooterBar2 />
            <FooterBar />
        </div>
    );
}

export default AboutPage;
