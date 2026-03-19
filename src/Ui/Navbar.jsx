import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to document when state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 border-b backdrop-blur-sm ${
          darkMode
            ? 'border-gray-700 bg-gray-800/95 shadow-[0_1px_0_rgba(55,65,81,0.85)]'
            : 'border-amber-200 bg-amber-50/95 shadow-[0_1px_0_rgba(217,119,6,0.08)]'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-amber-800 dark:text-amber-400">
                Aliya Cafe
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-amber-900 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 transition duration-300"
              >
                Home
              </a>
              <a
                href="#menu"
                className="text-amber-900 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 transition duration-300"
              >
                Menu
              </a>
              <a
                href="#about"
                className="text-amber-900 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 transition duration-300"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-amber-900 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 transition duration-300"
              >
                Contact
              </a>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="rounded-full p-2 text-amber-700 transition duration-300 hover:bg-amber-100 hover:text-amber-600 focus:outline-none dark:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-amber-300"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="rounded-full p-2 text-amber-700 transition duration-300 hover:bg-amber-100 hover:text-amber-600 focus:outline-none dark:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-amber-300"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
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

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              isMenuOpen ? "block" : "hidden"
            } mt-3 rounded-2xl border px-4 py-3 shadow-sm ${
              darkMode
                ? 'border-gray-700 bg-gray-800/95'
                : 'border-amber-100 bg-white/80'
            }`}
          >
            <a
              href="#home"
              className="block py-2 text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
            >
              Home
            </a>
            <a
              href="#menu"
              className="block py-2 text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
            >
              Menu
            </a>
            <a
              href="#about"
              className="block py-2 text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-amber-900 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
