import { usePanier } from '../context/PanierContext';
import { Link } from 'react-router-dom';

function Acceuil() {    
  const { ajouterAuPanier } = usePanier();

  // Exemples de produits pour la page d'accueil
  const produitsExemples = [
    { id: 'demo1', nom: 'Maki saumon', pieces: 6, prix: 8 },
    { id: 'demo2', nom: 'Nigiri assortiment', pieces: 8, prix: 12 },
    { id: 'demo3', nom: 'Bento Sushi', pieces: 10, prix: 14 }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {/* HERO SECTION avec effet débordement */}
        <section className="relative min-h-[500px] flex items-center mb-20 mt-20 overflow-visible">
          {/* Texte à gauche */}
          <div className="max-w-xl z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-rose-600 mb-6 leading-tight">
              Savourez l'authenticité japonaise
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              SushiFast vous propose une expérience rapide et savoureuse. 
              Découvrez nos menus préparés avec des ingrédients frais et 
              commandez en quelques clics pour une livraison ultra-rapide.
            </p>
            <div className="flex gap-4">
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded font-semibold transition shadow-lg">
                Commander maintenant
              </button>
              <Link to="/menus">
                <button className="bg-white hover:bg-gray-50 text-rose-600 px-8 py-3 rounded font-semibold transition border-2 border-rose-600">
                  Voir les menus
                </button>
              </Link>
            </div>
          </div>

          {/* Image à droite avec débordement */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 pointer-events-none">
            <img 
              src="/images/tamas-pap-zali_zGDWo8-unsplash.png" 
              alt="Sushi SushiFast" 
              className="h-[500px] w-auto object-contain"
            />
          </div>
        </section>

        {/* SECTION COMMENT ÇA MARCHE */}
        <section className="mb-20 mt-32">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Comment ça marche ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Choisissez */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6">
                <img 
                  src="/images/icones/menu.png" 
                  alt="Choisissez un menu" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Choisissez un menu
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Parcourez notre sélection de menus variés et choisissez celui qui vous fait envie parmi nos spécialités japonaises.
              </p>
            </div>

            {/* Card 2 - Livraison */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6">
                <img 
                  src="/images/icones/delivery.png" 
                  alt="Livraison" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Faites-vous livrer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Validez votre commande et recevez vos sushis frais directement chez vous en moins de 30 minutes.
              </p>
            </div>

            {/* Card 3 - Dégustez */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6">
                <img 
                  src="/images/icones/enjoy.png" 
                  alt="Dégustez" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Dégustez
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Savourez vos sushis fraîchement préparés et profitez d'une expérience culinaire authentique à la maison.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION NOS SPÉCIALITÉS */}
        <section id="menu" className="mb-12">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-8">Nos spécialités</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produitsExemples.map((produit, index) => (
              <article key={index} className="bg-white rounded-lg shadow p-4">
                <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">
                  Image {produit.nom}
                </div>
                <h4 className="font-semibold">{produit.nom}</h4>
                <p className="text-sm text-gray-600">
                  {index === 0 && "Maki frais et savoureux, servi avec sauce soja."}
                  {index === 1 && "Selection de nigiris frais, parfait pour partager."}
                  {index === 2 && "Repas complet avec soupe et salade."}
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-bold">{produit.prix}€</span>
                  <button 
                    onClick={() => {
                      ajouterAuPanier(produit);
                      alert(`${produit.nom} ajouté au panier!`);
                    }}
                    className="text-rose-600 hover:underline text-sm font-semibold"
                  >
                    🛒 Ajouter
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between">
          <span>© SushiFast</span>
          <span className="mt-2 md:mt-0">Contact: contact@sushifast.example</span>
        </div>
      </footer>
    </div>
  );
}

export default Acceuil;
