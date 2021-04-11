import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Hero from "../../components/Hero/hero";
import About from "../../components/About/about";
import Testimonials from "../../components/Testimonials/testimonials";
import Hero2 from "../../components/Hero2/hero2";
import FooterBar from "../../components/FooterBar/footerbar";
import FooterBar2 from "../../components/FooterBar2/footerbar2";
import Logo from "../../components/Logo/logo";
import Social from "../../components/SocialLinks/sociallinks";

function Home() {
    return (
        <div>
            <About />
            <Logo />
            <Navbar />
            <Social />
            <Hero2 />
            <Hero />
            <Testimonials />
            <FooterBar2 />
            <FooterBar />
        </div>
    );
}

export default Home;
