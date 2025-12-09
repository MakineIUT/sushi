import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <a href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              MonBrand<span className="text-indigo-600">.</span>
            </a>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Nous créons des solutions digitales simples et belles pour faire grandir votre business sans effort.
            </p>
          </div>

         
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Produit</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Fonctionnalités</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Intégrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Tarifs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Mises à jour</a></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Entreprise</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">À propos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Carrières</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Restez informé</h3>
            <p className="mt-4 text-gray-500 text-sm mb-4">Abonnez-vous à notre newsletter.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
              />
              <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors duration-300">
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        {/* --- PARTIE BASSE (Copyright & Socials) --- */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MonBrand Inc. Tous droits réservés.
          </p>
          
          {/* Icônes Réseaux Sociaux */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <SocialLink href="#" label="Twitter">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </SocialLink>
            
            <SocialLink href="#" label="Instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </SocialLink>

            <SocialLink href="#" label="LinkedIn">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Petit composant utilitaire pour les icônes (évite la répétition)
const SocialLink = ({ href, children, label }) => (
  <a 
    href={href} 
    aria-label={label}
    className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
  >
    <svg 
      className="h-5 w-5" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </a>
);

export default Footer;
