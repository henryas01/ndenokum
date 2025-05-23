import React from "react";
import HeroSection from "@components/hero";
import Navbar from "@components/navbar";
import HotItemsSlider from "@components/slider";
import PromoBanner from "@components/promoBanner";
import WhoWeAre from "@components/whoWeAre";
import HowItWorks from "@components/howItWorks";
import Testimonials from "@components/testimonials";
import Footer from "@components/footer";

const AboutContainer = () => {
  return (
    <Navbar>
      <HeroSection />
      <HotItemsSlider />
      <PromoBanner />
      <WhoWeAre />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </Navbar>
  );
};

export default AboutContainer;
