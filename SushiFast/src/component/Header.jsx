import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

// Reusable component for consistent styling
const NavLink = ({ to, href, children }) => {
  const baseClasses = "text-gray-600 font-medium hover:text-indigo-600 transition-colors duration-300";
  
  // If 'to' is provided, use React Router Link
  if (to) {
    return <Link to={to} className={baseClasses}>{children}</Link>;
  }
  
  // Otherwise use standard anchor tag for ID scrolling (#) or external links
  return <a href={href} className={baseClasses}>{children}</a>;
};

function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              MonBrand<span className="text-indigo-600">.</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-10">
              <li>
                <NavLink to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/menus">Menus</NavLink>
              </li>
              <li>
                {/* Anchor link for scrolling to a section on the same page */}
                <NavLink href="#pricing">Tarifs</NavLink>
              </li>
              <li>
                <NavLink href="#about">À propos</NavLink>
              </li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-900 font-medium hover:text-indigo-600 transition-colors">
              Connexion
            </Link>
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