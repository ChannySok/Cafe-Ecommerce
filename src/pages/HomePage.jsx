import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Contact from "../Sections/Contact.jsx";
import Footer from "../Sections/Footer.jsx";
import HeroSection from "../Sections/HeroSection.jsx";
import OurStory from "../Sections/OurStory.jsx";
import Menu from "./Menu.jsx";

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
