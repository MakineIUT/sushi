import React from 'react';

function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          
         
          <div className="flex-shrink-0 cursor-pointer">
            <a href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              MonBrand<span className="text-indigo-600">.</span>
            </a>
          </div>

         
          <nav>
            <ul className="flex space-x-10">
              <li>
                <a href="#home" className="text-gray-600 font-medium hover:text-indigo-600 transition-colors duration-300">
                 <MenuLink to="/">Accueil</MenuLink>
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 font-medium hover:text-indigo-600 transition-colors duration-300">
                   <MenuLink to="/menus">Menus</MenuLink>
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 font-medium hover:text-indigo-600 transition-colors duration-300">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 font-medium hover:text-indigo-600 transition-colors duration-300">
                  À propos
                </a>
              </li>
            </ul>
          </nav>

          
          <div className="flex items-center space-x-4">
            <a href="#login" className="text-gray-900 font-medium hover:text-indigo-600 transition-colors">
              Connexion
            </a>
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/30">
              Commencer
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;