import React, { useState } from "react";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Layout = ({
  darkMode,
  toggleDarkMode,
  cart,
  setShowOrderForm,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateWithTransition = (to, options) => {
    if (typeof document !== "undefined" && document.startViewTransition) {
      document.startViewTransition(() => navigate(to, options));
      return;
    }

    navigate(to, options);
  };

  const scrollToSection = (sectionId) => {
    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleSectionNavigation = (sectionId) => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      scrollToSection(sectionId);
      return;
    }

    navigateWithTransition("/", { state: { scrollToSection: sectionId } });
  };

  const handleMenuNavigation = () => {
    setIsMenuOpen(false);

    if (location.pathname === "/" || location.pathname === "/menu") {
      scrollToSection("menu");
      return;
    }

    navigateWithTransition("/menu", { state: { scrollToMenu: true } });
  };

  const totalCartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div className="font-sans bg-amber-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <nav
        className={`fixed w-full z-50 border-b backdrop-blur-sm ${
          darkMode
            ? "border-gray-700 bg-gray-800/95 shadow-[0_1px_0_rgba(55,65,81,0.85)]"
            : "border-amber-200 bg-amber-50/95 shadow-[0_1px_0_rgba(217,119,6,0.08)]"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="icon.png" alt="Logo" className="h-10 w-auto mr-2" />
              <span className="text-2xl font-bold text-amber-800 dark:text-amber-400">
                Aliya
              </span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <button
                type="button"
                onClick={() => handleSectionNavigation("home")}
                className="text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
              >
                Home
              </button>
              <button
                type="button"
                onClick={handleMenuNavigation}
                className="text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
              >
                Menu
              </button>
              <button
                type="button"
                onClick={() => handleSectionNavigation("about")}
                className="text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleSectionNavigation("contact")}
                className="text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
              >
                Contact
              </button>

              <button
                onClick={toggleDarkMode}
                className="rounded-full p-2 text-amber-700 transition duration-300 hover:bg-amber-100 hover:text-amber-600 focus:outline-none dark:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-amber-300"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <FaSun className="text-amber-400 text-xl" />
                ) : (
                  <FaMoon className="text-amber-400 text-xl" />
                )}
              </button>

              <div
                className="relative cursor-pointer text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
                onClick={() => totalCartItemCount > 0 && setShowOrderForm(true)}
              >
                <FaShoppingCart className="text-2xl" />
                {totalCartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalCartItemCount}
                  </span>
                )}
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="rounded-full p-2 text-amber-700 transition duration-300 hover:bg-amber-100 hover:text-amber-600 focus:outline-none dark:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-amber-300"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <FaSun className="text-amber-400 text-xl" />
                ) : (
                  <FaMoon className="text-amber-400 text-xl" />
                )}
              </button>

              <div
                className="relative cursor-pointer text-amber-900 dark:text-amber-400"
                onClick={() => totalCartItemCount > 0 && setShowOrderForm(true)}
              >
                <FaShoppingCart className="text-2xl" />
                {totalCartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalCartItemCount}
                  </span>
                )}
              </div>
              <button
                onClick={toggleMenu}
                className="rounded-full p-2 text-amber-900 transition duration-300 hover:bg-amber-100 hover:text-amber-600 focus:outline-none dark:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-amber-300"
              >
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`md:hidden ${
              isMenuOpen ? "block" : "hidden"
            } mt-3 rounded-2xl border px-4 py-3 shadow-sm ${
              darkMode
                ? "border-gray-700 bg-gray-800/95"
                : "border-amber-100 bg-white/80"
            }`}
          >
            <button
              type="button"
              onClick={() => handleSectionNavigation("home")}
              className="block py-2 text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
            >
              Home
            </button>
            <button
              type="button"
              onClick={handleMenuNavigation}
              className="block py-2 text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
            >
              Menu
            </button>
            <button
              type="button"
              onClick={() => handleSectionNavigation("about")}
              className="block py-2 text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleSectionNavigation("contact")}
              className="block py-2 text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="bg-amber-50 pt-24 dark:bg-gray-900">{children}</main>
    </div>
  );
};

export default Layout;
