import React from "react";

const OurStory = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`scroll-mt-24 py-16 ${
        darkMode ? "bg-gray-800" : "bg-amber-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="cafeshop.jpg"
              alt="Cafe interior"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-amber-900 dark:text-amber-400 mb-6">
              Our Story
            </h2>
            <p
              className={`mb-4 ${darkMode ? "text-amber-50" : "text-gray-700"}`}
            >
              Founded in 2010, Aliya&apos;s Cafe and Snacks began as a small
              coffee cart in downtown. Our passion for quality coffee and
              homemade food quickly gained us a loyal following.
            </p>
            <p
              className={`mb-4 ${darkMode ? "text-amber-50" : "text-gray-700"}`}
            >
              Today, we&apos;re proud to serve our community from our cozy
              brick-and-mortar location, still maintaining the same commitment
              to quality and hospitality that started it all.
            </p>
            <p
              className={`mb-6 ${darkMode ? "text-amber-50" : "text-gray-700"}`}
            >
              We source our beans directly from ethical farmers and prepare all
              our food fresh daily using locally-sourced ingredients whenever
              possible.
            </p>
            <div className="flex space-x-4">
              <div className="bg-amber-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-amber-900 dark:text-amber-400 mb-2">
                  Quality
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Premium ingredients, expertly prepared
                </p>
              </div>
              <div className="bg-amber-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-amber-900 dark:text-amber-400 mb-2">
                  Community
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Supporting local producers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
