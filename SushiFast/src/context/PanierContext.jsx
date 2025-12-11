import { createContext, useContext, useState } from 'react';

const PanierContext = createContext();

export const usePanier = () => {
  const context = useContext(PanierContext);
  if (!context) {
    throw new Error('usePanier doit être utilisé dans un PanierProvider');
  }
  return context;
};

export const PanierProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);
  const [isPanierOpen, setIsPanierOpen] = useState(false);

  // Ajouter un produit au panier
  const ajouterAuPanier = (produit) => {
    setPanier((prevPanier) => {
      const produitExistant = prevPanier.find(item => item.id === produit.id);
      
      if (produitExistant) {
        // Si le produit existe déjà, augmenter la quantité
        return prevPanier.map(item =>
          item.id === produit.id
            ? { ...item, quantite: item.quantite + 1 }
            : item
        );
      } else {
        // Sinon, ajouter le nouveau produit avec quantité 1
        return [...prevPanier, { ...produit, quantite: 1 }];
      }
    });
  };

  // Retirer un produit du panier
  const retirerDuPanier = (produitId) => {
    setPanier((prevPanier) => prevPanier.filter(item => item.id !== produitId));
  };

  // Modifier la quantité d'un produit
  const modifierQuantite = (produitId, nouvelleQuantite) => {
    if (nouvelleQuantite <= 0) {
      retirerDuPanier(produitId);
    } else {
      setPanier((prevPanier) =>
        prevPanier.map(item =>
          item.id === produitId
            ? { ...item, quantite: nouvelleQuantite }
            : item
        )
      );
    }
  };

  // Vider le panier
  const viderPanier = () => {
    setPanier([]);
  };

  // Calculer le total
  const calculerTotal = () => {
    return panier.reduce((total, item) => total + (item.prix * item.quantite), 0);
  };

  // Compter le nombre d'articles
  const compterArticles = () => {
    return panier.reduce((total, item) => total + item.quantite, 0);
  };

  // Ouvrir/Fermer le panier
  const togglePanier = () => {
    setIsPanierOpen(!isPanierOpen);
  };

  const value = {
    panier,
    ajouterAuPanier,
    retirerDuPanier,
    modifierQuantite,
    viderPanier,
    calculerTotal,
    compterArticles,
    isPanierOpen,
    togglePanier,
    setIsPanierOpen
  };

  return (
    <PanierContext.Provider value={value}>
      {children}
    </PanierContext.Provider>
  );
};
