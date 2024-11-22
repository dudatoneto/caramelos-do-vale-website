import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-200 p-4 flex justify-between items-center shadow-lg z-10">
      {/* Left side for logo */}
      <div className="flex-shrink-0 ml-4"> 
        <img src="../src/images/logos/logo-caramelos-do-vale.png" alt="logo" className="h-16" />
      </div>

      {/* Right side for navigation */}
      <nav className="hidden md:flex space-x-4 ml-8 mr-8">
        {props.map((item) => (
          <Link 
            key={item.description} 
            to={item.link} 
            className="text-black hover:text-gray-700"
          >
            {item.description}
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden ml-auto mr-8"> {/* Adicionando ml-auto para garantir que o botão de menu esteja sempre visível */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black p-2 rounded focus:outline-none"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-200 flex flex-col items-center md:hidden">
          {props.map((item) => (
            <Link
              key={item.description}
              to={item.link}
              className="text-black p-2 w-full text-center hover:bg-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.description}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;