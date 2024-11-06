import React from "react";

function Footer() {
  const navItems = [
    "Página Inicial",
    "Como ajudar",
    "Sobre Nós",
    "Animais para Adoção",
    "Loja",
    "Eventos",
    "Voluntariado",
    "Contato"
  ];
 
  const socialNet = [
    { 
      id: "Threads",
      class: "bg-gray-200 text-black p-0 m-0 h-8 w-8",
      img: "../src/images/socials/threads-logo.svg",
      url: "https://www.threads.net/@caramelosdovale"
    }, 
    { 
      id: "Insta",
      class: "bg-gray-200 text-black p-0 m-0 h-8 w-8",
      img: "../src/images/socials/instagram-logo-white-thin.svg",
      url: "https://www.instagram.com/caramelosdovale/"
    }, 
    { 
      id: "Tiktok",
      class: "bg-gray-200 text-black p-0 m-0 h-8 w-8",
      img: "../src/images/socials/instagram-logo-white-thin.svg",
      url: "https://www.tiktok.com/@caramelosdovale"
    }
  ]; 

  return (
    <footer className="bg-gray-200 fixed bottom-0 left-0 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center my-10">
        {/* Container for the logo and the upper divs */}
        <div className="flex flex-col items-center mb-4 md:mb-0 md:w-1/4">
          {/* Logo (visible on all screens) */}
          <div className="flex-shrink-0 mb-2">
            <img
              src="../src/images/logos/logo-caramelos-do-vale.png"
              alt="logo"
              className="h-16"
            />
          </div>

          {/* Upper divs */}
          <div className="flex space-x-4">
            { socialNet.map((item) => (
              <a
                key={ item.id }
                href={ item.url }
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 p-0 pt-2 mt-2"
              >
                <img
                  src={ item.img }
                  alt={ item.id }
                  className={ item.class }
                />
              </a>
            ))}
          </div>
        </div>

        {/* Middle section (hidden on small screens) */}
        <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0 hidden md:flex">
          <div />
        </div>

        {/* Right side with grid (hidden on small screens) */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 hidden md:grid">
          { navItems.map((item) => (
            <button key={ item } className="bg-gray-200 text-black p-0">
              { item }
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;