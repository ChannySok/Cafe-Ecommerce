import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const OurDrinks = ({ addToCart, darkMode }) => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const navigate = useNavigate();
  const getImageSrc = (drink) => {
    const imageOverrides = {
      "drink-6": "MochaFrappé.png",
      "drink-8": "Café Bombón.png",
    };

    return encodeURI(`/${imageOverrides[drink.id] ?? drink.image}`);
  };

  const drinks = [
    {
      id: "drink-1",
      name: "Classic Espresso",
      price: 3.5,
      ingredients: ["Premium espresso beans", "Hot water", "Sugar", "Milk"],
      image: "ClassicEspresso.png",
    },
    {
      id: "drink-2",
      name: "Cappuccino Delight",
      price: 4.25,
      ingredients: ["Espresso", "Steamed milk", "Milk foam", "Cinnamon dust"],
      image: "CappuccinoDelight.png",
    },
    {
      id: "drink-3",
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
      id: "drink-4",
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
      id: "drink-5",
      name: "Vanilla Latte",
      price: 4.5,
      ingredients: ["Espresso", "Steamed milk", "Vanilla syrup", "Latte art"],
      image: "Vanilla Latte.png",
    },
    {
      id: "drink-6",
      name: "Mocha Frappé",
      price: 5.25,
      ingredients: [
        "Espresso",
        "Chocolate syrup",
        "Milk",
        "Ice",
        "Whipped cream",
      ],
      image: "MochaFrappé.png",
    },
    {
      id: "drink-7",
      name: "Coffee Honey & Cinnamon",
      price: 4.0,
      ingredients: ["Brewed coffee", "Honey", "Cinnamon", "Whipped cream"],
      image: "Coffee with Honey & Cinnamon.png",
    },
    {
      id: "drink-8",
      name: "Café Bombón",
      price: 4.75,
      ingredients: [
        "Espresso",
        "Chocolate syrup",
        "Milk",
        "Sweetened condensed milk (1:1)",
        "Whipped cream",
      ],
      image: "Café Bombón.png",
    },
  ];

  const handleViewDetails = (drink) => setSelectedDrink(drink);
  const handleCloseDetails = () => setSelectedDrink(null);
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
        className={`text-5xl font-bold text-center mb-12 ${darkMode ? "text-amber-400" : "text-amber-900"}`}
      >
        Our Drinks
      </h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className={`rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${darkMode ? "bg-gray-700" : "bg-white"}`}
            >
              <div className="relative">
                <img
                  src={getImageSrc(drink)}
                  alt={drink.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full font-semibold">
                  ${drink.price.toFixed(2)}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 ${darkMode ? "text-amber-400" : "text-amber-900"}`}
                >
                  {drink.name}
                </h3>

                <div className="mb-4">
                  <h4
                    className={`text-sm font-semibold mb-2 ${darkMode ? "text-amber-50" : "text-amber-900"}`}
                  >
                    Ingredients:
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${darkMode ? "text-amber-50" : "text-black"}`}
                  >
                    {drink.ingredients.slice(0, 3).join(", ")}...
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => handleViewDetails(drink)}
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

      {selectedDrink && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className={`rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="relative">
              <img
                src={getImageSrc(selectedDrink)}
                alt={selectedDrink.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={handleCloseDetails}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
              >
                ✕
              </button>
              <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-full font-semibold">
                ${selectedDrink.price.toFixed(2)}
              </div>
            </div>

            <div className="p-6">
              <h3
                className={`text-2xl font-bold mb-3 ${darkMode ? "text-amber-400" : "text-amber-900"}`}
              >
                {selectedDrink.name}
              </h3>
              <div className="mb-4">
                <h4
                  className={`text-lg font-semibold mb-2 ${darkMode ? "text-amber-50" : "text-amber-900"}`}
                >
                  Ingredients:
                </h4>
                <ul
                  className={`text-sm leading-relaxed ${darkMode ? "text-amber-50" : "text-black"}`}
                >
                  {selectedDrink.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-1">
                      • {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  addToCart(selectedDrink);
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

export default OurDrinks;
