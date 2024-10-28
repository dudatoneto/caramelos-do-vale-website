import React from "react";

function Footer() {
	const navItems = ["Página Inicial","Como ajudar", "Sobre Nós", "Animais para Adoção", "Loja", "Eventos", "Voluntariado", "Contato"];
	const socialNet= ["X", "Instagram", "Tiktok", "Linkedin"];

  return (
    <footer className="bg-gray-100 p-4 fixed bottom-0 left-0 w-full">
      <div className="flex justify-between items-center">
        {/* Container for the upper divs and logo */}
				<div className="flex flex-col items-center md:w-1/4 mb-4 md:mb-0">
				  {/* Logo */}
					<div className="flex-shrink-0">
						<img src="../src/images/logo-caramelos-do-vale.png" alt="logo" className="h-16" />
          </div>
          {/* Upper divs */}
          <div className="flex space-x-4">
						{ socialNet.map((item) => (
							<button key={ item } className="bg-gray-100 text-black p-0">
								{ item }
							</button>
						))}
          </div>

        </div>

        {/* Middle section */}
        <div className="w-1/4 flex justify-center">
          <div />
        </div>

        {/* Right side with grid */}
        <div className="w-1/2 grid grid-cols-2 gap-4">
				{ navItems.map((item) => (
            <button key={ item } className="bg-gray-100 text-black p-0">
              { item }
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
