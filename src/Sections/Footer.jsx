import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`pb-12 ${
        darkMode ? "bg-gray-800 text-amber-50" : "bg-gray-50 text-gray-600"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="border-t border-amber-800 dark:border-amber-400 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Aliya Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
