import React from 'react';
import { usePanier } from '../context/PanierContext';

function Panier() {
  const {
    panier,
    retirerDuPanier,
    modifierQuantite,
    viderPanier,
    calculerTotal,
    isPanierOpen,
    togglePanier
  } = usePanier();

  if (!isPanierOpen) return null;

  return (
    <>
      {/* Overlay sombre */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={togglePanier}
      />

      {/* Panneau latéral du panier */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col">
        
        {/* Header du panier */}
        <div className="bg-red-600 text-white p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Mon Panier</h2>
          <button 
            onClick={togglePanier}
            className="text-white hover:text-gray-200 text-3xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Contenu du panier */}
        <div className="flex-1 overflow-y-auto p-4">
          {panier.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Votre panier est vide</p>
              <p className="text-gray-400 text-sm mt-2">Ajoutez des produits pour commencer</p>
            </div>
          ) : (
            <div className="space-y-4">
              {panier.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-4 shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-800">{item.nom}</h3>
                    <button
                      onClick={() => retirerDuPanier(item.id)}
                      className="text-red-500 hover:text-red-700 font-bold"
                    >
                      ×
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">{item.pieces} pièces</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => modifierQuantite(item.id, item.quantite - 1)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold w-8 h-8 rounded"
                      >
                        -
                      </button>
                      <span className="font-semibold text-lg">{item.quantite}</span>
                      <button
                        onClick={() => modifierQuantite(item.id, item.quantite + 1)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold w-8 h-8 rounded"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-red-600">
                      {(item.prix * item.quantite).toFixed(2)}€
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer avec total et boutons */}
        {panier.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-red-600">
                {calculerTotal().toFixed(2)}€
              </span>
            </div>
            
            <button
              className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition mb-2"
              onClick={() => {
                alert('Commande confirmée! Total: ' + calculerTotal().toFixed(2) + '€');
                viderPanier();
                togglePanier();
              }}
            >
              Commander
            </button>
            
            <button
              onClick={viderPanier}
              className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
            >
              Vider le panier
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Panier;
