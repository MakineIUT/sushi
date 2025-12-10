import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-red-600">
            SushiFast
          </Link>

          {/* Navigation */}
          <nav className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition">Accueil</Link>
            <Link to="/menus" className="text-gray-700 hover:text-red-600 transition">Menus</Link>
          </nav>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-red-600 transition font-medium">
              Connexion
            </Link>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Commander
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;