import React from "react";

function Header() {
  const navItems = ["Como ajudar", "Sobre Nós", "Animais para Adoção", "Loja", "Eventos", "Voluntariado","Contato"];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 p-4 flex justify-between items-center shadow-lg">
      {/* Left side for logo */}
      <div className="w-1/4 pl-8">
        <img src="../src/images/logo-caramelos-do-vale.png" alt="logo" className="h-16" />
      </div>

      {/* Right side for navigation */}
      <nav className="w-3/4 flex justify-end pr-8">
        <div className="space-x-4">
          { navItems.map((item) => (
            <button key={ item } className="bg-gray-100 text-black">
              { item }
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header