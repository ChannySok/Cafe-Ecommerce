import React from "react";
import { Link } from "react-router-dom";

const menuCards = [
  {
    title: "Our Drinks",
    description:
      "Explore signature coffees, iced favorites, and sweet cafe classics.",
    image: "ClassicEspresso.png",
    to: "/menu/drinks",
    cta: "See Drinks",
  },
  {
    title: "Our Snacks",
    description:
      "Browse fresh snacks and light bites that pair perfectly with coffee.",
    image: "CappuccinoDelight.png",
    to: "/menu/snacks",
    cta: "See Snacks",
  },
  {
    title: "Our Foods",
    description:
      "Discover Khmer food favorites with warm, comforting local flavors.",
    image: "cafeshop.jpg",
    to: "/menu/foods",
    cta: "See Foods",
  },
];

const Menu = ({ darkMode }) => {
  const getImageSrc = (imageName) => encodeURI(`/${imageName}`);

  return (
    <section
      id="menu"
      className={`scroll-mt-24 py-16 ${
        darkMode ? "bg-gray-800" : "bg-amber-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            className={`text-5xl font-bold ${
              darkMode ? "text-amber-400" : "text-amber-900"
            }`}
          >
            Our Menu
          </h2>
          <p
            className={`mt-4 text-lg ${
              darkMode ? "text-amber-100" : "text-gray-600"
            }`}
          >
            Choose a category first, then open the full list of drinks,
            snacks, or Khmer foods.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuCards.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className={`group overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                darkMode
                  ? "border-gray-700 bg-gray-700 shadow-lg"
                  : "border-amber-200 bg-white shadow-lg"
              }`}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={getImageSrc(card.image)}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-amber-50">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-5">
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-amber-100" : "text-gray-600"
                  }`}
                >
                  Tap to open the full page
                </span>
                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                    darkMode
                      ? "bg-amber-500 text-gray-900 group-hover:bg-amber-400"
                      : "bg-amber-500 text-white group-hover:bg-amber-600"
                  }`}
                >
                  {card.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
