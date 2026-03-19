import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import HeroSection from "../sections/HeroSection";
import OurStory from "../sections/OurStory";
import Menu from "./Menu";

const HomePage = ({ darkMode }) => {
  const location = useLocation();

  useEffect(() => {
    const sectionId =
      location.state?.scrollToSection || location.hash.replace("#", "");

    if (!sectionId) {
      return;
    }

    if (sectionId === "home") {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      return;
    }

    const element = document.getElementById(sectionId);

    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location.hash, location.key, location.state]);

  return (
    <div className="font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <section id="home">
        <HeroSection darkMode={darkMode} />
      </section>

      <Menu darkMode={darkMode} />
      <OurStory darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default HomePage;
