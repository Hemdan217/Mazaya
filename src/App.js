import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingSection from "./components/landingSection";
import AboutSection from "./components/aboutSection";
import MessageSection from "./components/messageSection";
import ServicesSection from "./components/servicesSection";
import ContactUsSection from "./components/contactUsSection";
import Header from "./components/headerSection";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <LandingSection />
      <MessageSection />
      <AboutSection />
      <ServicesSection />
      <ContactUsSection />
    </>
  );
}

export default App;
