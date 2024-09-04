import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import translations from "../utils/translations";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "TVShows", path: "/tv-shows" },
  { name: "Sports", path: "/sports" },
  { name: "Live", path: "/live" },
];

const languages = [
  "English",
  "French",
  "German",
  "Russian",
  "Spanish",
  "Chinese",
];

const Navbar = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const currentTranslations = translations[language] || translations["English"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <nav className="p-4 bg-black">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div>
          <Link to="/">
            <span className="text-xl font-bold text-red">
              Horizon Broadcast
            </span>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
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
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`md:flex md:flex-row md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-3 py-2 text-white rounded hover:bg-gray-700"
            >
              {currentTranslations[item.name]}
            </Link>
          ))}
        </div>

        {/* Settings Button */}
        <div className="relative">
          <button
            onClick={toggleSettings}
            className="py-2 text-white rounded hover:bg-gray-700"
          >
            {/* Icon on mobile, text on larger screens */}
            <span className="md:hidden">
              <FaCog size={24} />
            </span>
            <span className="hidden md:inline">
              {currentTranslations.Settings}
            </span>
          </button>
          {showSettings && (
            <div className="absolute right-0 z-50 w-48 mt-2 bg-white rounded-md shadow-lg">
              <div className="p-4">
                <label className="block text-gray-700">Select Language:</label>
                <select
                  value={language}
                  onChange={(e) => onLanguageChange(e.target.value)}
                  className="block w-full p-2 mt-2 border rounded"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
