import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const OurSnacks = ({ addToCart, darkMode }) => {
  const [selectedSnack, setSelectedSnack] = useState(null);
  const navigate = useNavigate();
  const getImageSrc = (snack) => {
    const imageOverrides = {
      "snack-6": "MochaFrappé.png",
      "snack-8": "Café Bombón.png",
    };

    return encodeURI(`/${imageOverrides[snack.id] ?? snack.image}`);
  };

  const snacks = [
    {
      id: "snack-1",
      name: "បាយឆា",
      price: 3.5,
      ingredients: ["Rice", "Egg", "Vegetables", "Soy sauce", "Garlic"],
      image: "ClassicEspresso.png",
    },
    {
      id: "snack-2",
      name: "Spring Rolls",
      price: 4.25,
      ingredients: ["Rice paper", "Vegetables", "Herbs", "Dipping sauce"],
      image: "CappuccinoDelight.png",
    },
    {
      id: "snack-3",
      name: "Caramel Macchiato",
      price: 5.0,
      ingredients: [
        "Espresso",
        "Steamed milk",
        "Vanilla syrup",
        "Caramel drizzle",
      ],
      image: "CaramelMacchiato.png",
    },
    {
      id: "snack-4",
      name: "Iced Americano",
      price: 3.75,
      ingredients: [
        "Double shot espresso",
        "Cold water",
        "Ice cubes",
        "Lemon twist",
      ],
      image: "Iced Americano.png",
    },
    {
      id: "snack-5",
      name: "Vanilla Latte",
      price: 4.5,
      ingredients: [
        "Espresso",
        "Steamed milk",
        "Vanilla syrup",
        "Latte art",
        "Hot water",
      ],
      image: "Vanilla Latte.png",
    },
    {
      id: "snack-6",
      name: "Mocha Frappé",
      price: 5.25,
      ingredients: [
        "Espresso",
        "Chocolate syrup",
        "Milk",
        "Ice",
        "Whipped cream",
        "Cocoa powder",
      ],
      image: "MochaFrappé.png",
    },
    {
      id: "snack-7",
      name: "Coffee Honey & Cinnamon",
      price: 4.0,
      ingredients: ["Brewed coffee", "honey", "cinnamon", "Whipped cream"],
      image: "Coffee with Honey & Cinnamon.png",
    },
    {
      id: "snack-8",
      name: "Café Bombón",
      price: 4.75,
      ingredients: [
        "Espresso",
        "Chocolate syrup",
        "Milk",
        " sweetened condensed milk (1:1)",
        "Whipped cream",
      ],
      image: "Café Bombón.png",
    },
  ];

  const handleViewDetails = (snack) => {
    setSelectedSnack(snack);
  };

  const handleCloseDetails = () => {
    setSelectedSnack(null);
  };

  const handleBackToMenu = () => {
    if (typeof document !== "undefined" && document.startViewTransition) {
      document.startViewTransition(() => {
        navigate("/", { state: { scrollToSection: "menu" } });
      });
      return;
    }

    navigate("/", { state: { scrollToSection: "menu" } });
  };

  return (
    <div className={`py-16 ${darkMode ? "bg-gray-800" : "bg-amber-50"}`}>
      <div className="container mx-auto px-4 mb-8">
        <button
          type="button"
          onClick={handleBackToMenu}
          className={`group inline-flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400/60 ${
            darkMode
              ? "border-gray-600 bg-gray-700/90 text-amber-100 hover:border-amber-400 hover:bg-gray-700"
              : "border-amber-200 bg-white text-amber-900 hover:border-amber-400 hover:bg-amber-50"
          }`}
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 group-hover:scale-105 ${
              darkMode
                ? "bg-gray-800 text-amber-300"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            <IoMdArrowBack className="text-lg" />
          </span>
          <span className="text-left leading-tight">
            <span
              className={`block text-[10px] font-semibold uppercase tracking-[0.25em] ${
                darkMode ? "text-amber-300/80" : "text-amber-700/70"
              }`}
            >
              Navigation
            </span>
            <span className="block text-sm font-semibold">Back to Menu</span>
          </span>
        </button>
      </div>

      <h2
        className={`text-5xl font-bold text-center mb-12 ${
          darkMode ? "text-amber-400" : "text-amber-900"
        }`}
      >
        Our Snacks
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {snacks.map((snack) => (
            <div
              key={snack.id}
              className={`rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <div className="relative">
                <img
                  src={getImageSrc(snack)}
                  alt={snack.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full font-semibold">
                  ${snack.price.toFixed(2)}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-amber-400" : "text-amber-900"
                  }`}
                >
                  {snack.name}
                </h3>

                <div className="mb-4">
                  <h4
                    className={`text-sm font-semibold mb-2 ${
                      darkMode ? "text-amber-50" : "text-amber-900"
                    }`}
                  >
                    Ingredients:
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? "text-amber-50" : "text-black"
                    }`}
                  >
                    {snack.ingredients.slice(0, 3).join(", ")}...
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => handleViewDetails(snack)}
                    className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Snack Details Modal */}
      {selectedSnack && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className={`rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="relative">
              <img
                src={getImageSrc(selectedSnack)}
                alt={selectedSnack.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={handleCloseDetails}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-full font-semibold">
                ${selectedSnack.price.toFixed(2)}
              </div>
            </div>

            <div className="p-6">
              <h3
                className={`text-2xl font-bold mb-3 ${
                  darkMode ? "text-amber-400" : "text-amber-900"
                }`}
              >
                {selectedSnack.name}
              </h3>

              <div className="mb-4">
                <h4
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-amber-50" : "text-amber-900"
                  }`}
                >
                  Ingredients:
                </h4>
                <ul
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-amber-50" : "text-black"
                  }`}
                >
                  {selectedSnack.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-1">
                      • {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  addToCart(selectedSnack);
                  handleCloseDetails();
                }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurSnacks;
