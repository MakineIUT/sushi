import { useState, useEffect } from "react";
import boxes from "../DATA/boxes.json";

function Menus() {  
  const [Boxes, setBoxes] = useState([]);

  useEffect(() => {
    setBoxes(boxes);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Menus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Boxes.map((box) => (
          <div key={box.id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-500">
            <h2 className="text-2xl font-bold text-red-600 mb-3">{box.nom}</h2>
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