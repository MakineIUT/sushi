import { useState, useEffect } from "react";
import boxes from "../DATA/boxes.json";

function Menus() {  
  const [Boxes, setBoxes] = useState([]);

  useEffect(() => {
    setBoxes(boxes);
  }, []);

  return (
    <div>
      <h1>Menus</h1>
      <div className="boxes-container">
        {Boxes.map((box) => (
          <div key={box.id} className="box-card">
            <h2>{box.nom}</h2>
            <p><strong>Prix:</strong> {box.prix}€</p>
            <p><strong>Pièces:</strong> {box.pieces}</p>
            <p><strong>Saveurs:</strong> {box.saveurs.join(", ")}</p>
            <h3>Aliments:</h3>
            <ul>
              {box.aliments.map((aliment, index) => (
                <li key={index}>
                  {aliment.nom} (x{aliment.quantite})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menus;