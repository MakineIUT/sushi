import { useState, useEffect } from "react";
import DATAboxes from "../DATA/boxes.json";

function Menus() {  
  const [Boxes, setBoxes] = useState([]);

useEffect(() => {
  setBoxes(DATAboxes);
}, []);

const F_saveurs = (saveur) => {
  const filtered = DATAboxes.filter(box => box.saveurs.includes(saveur));
  setBoxes(filtered);
};

const F = (nomAliment) => {
    const term = nomAliment.toLowerCase();
    
    setBoxes(boxes.filter(box => 
      box.aliments.some(aliment => aliment.nom.toLowerCase().includes(term))
    ));
  };
  
const F_Croissant = () => {
    const trie = [...Boxes].sort((a, b) => a.prix - b.prix);
    setBoxes(trie);
  };

const F_Decroissant = () => {
    const trie = [...Boxes].sort((a, b) => b.prix - a.prix);
    setBoxes(trie);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Menus</h1>
      <div className="mb-6 flex justify-center">
        <button className="bg-red-500 mr-4 rounded-full  hover:bg-red-600 transition px-6 py-2 text-white" onClick={() => setBoxes(boxes)}>Tous</button>
        <button className="bg-red-500 mr-4 rounded-full  hover:bg-red-600 transition px-6 py-2 text-white" onClick={() => F_saveurs("avocat")}>Avocat</button>
       <button className="bg-red-500 mr-4 rounded-full  hover:bg-red-600 transition px-6 py-2 text-white" onClick={() => F_saveurs("coriandre")}>Coriandre</button>
        <button className="bg-red-500 mr-4 rounded-full  hover:bg-red-600 transition px-6 py-2 text-white" onClick={() => F("California Saumon Avocat")}>California Saumon Avocat</button>
        <button className="bg-blue-600 mr-4 rounded-full hover:bg-blue-700 transition px-6 py-2 text-white" onClick={() => F_Croissant()}>
          Prix Croissant ↑
        </button>
        <button className="bg-blue-600 mr-4 rounded-full hover:bg-blue-700 transition px-6 py-2 text-white" onClick={() => F_Decroissant()}>
          Prix Décroissant ↓
        </button>
     
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Boxes.map((box) => (
          <div key={box.id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-500">
            <h2 className="text-2xl font-bold text-red-600 mb-3">{box.nom}</h2>
            <img className="" src={box.image} alt={box.nom} />
            <p className="text-gray-600 mb-2"><strong>Prix:</strong> {box.prix}€</p>
            <p className="text-gray-600 mb-2"><strong>Pièces:</strong> {box.pieces}</p>
            <p className="text-gray-600 mb-4"><strong>Saveurs:</strong> {box.saveurs.join(", ")}</p>
            
            <h3 className="text-lg font-semibold text-blue-600 mt-4 mb-2">Aliments:</h3>
            <ul className="space-y-2">
              {box.aliments.map((aliment, index) => (
                <li key={index} className="text-gray-600 pb-1">
                  {aliment.nom} (x{aliment.quantite})
                </li>
              ))}
            </ul>
            
            <div className="flex justify-center mt-4">
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">
                voir le menus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menus;