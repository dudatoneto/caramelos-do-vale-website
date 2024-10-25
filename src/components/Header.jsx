import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 p-4 flex justify-between items-center shadow-lg">
      {/* Left side for logo */}
      <div className="w-1/4 pl-8">
        <img src="../src/images/logo-caramelos-do-vale.png" alt="logo" className="h-16" />
      </div>

      {/* Right side for navigation */}
      <nav className="w-3/4 flex justify-end pr-8">
        <div className="space-x-4">
          <button className="bg-blue-400 text-black font-cabin">Como ajudar</button>
          <button className="bg-gray-100 text-black">Sobre Nós</button>
          <button className="bg-gray-100 text-black">Animais para Adoção</button>
          <button className="bg-gray-100 text-black">Loja</button>
					<button className="bg-gray-100 text-black">Eventos</button>
          <button className="bg-gray-100 text-black">Voluntariado</button>
          <button className="bg-gray-100 text-black">Contato</button>
        </div>
      </nav>
    </header>
  );
}

export default Header