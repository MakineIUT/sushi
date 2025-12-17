import { useState, useEffect } from "react";

function Filtre({ Boxes, setBoxes, DATAboxes }) {
	const F_saveurs = (saveur) => {
		const filtered = DATAboxes.filter((box) =>
			box.saveurs.includes(saveur)
		);
		setBoxes(filtered);
	};

	const F = (nomAliment) => {
		const term = nomAliment.toLowerCase();
		setBoxes(
			DATAboxes.filter((box) =>
				box.aliments.some((aliment) =>
					aliment.nom.toLowerCase().includes(term)
				)
			)
		);
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
		<>
			<div className="mb-8 flex flex-wrap justify-center gap-4">
				<button
					className="bg-red-500 mr-4 rounded-full hover:bg-red-600 transition px-6 py-2 text-white"
					onClick={() => setBoxes(DATAboxes)}
				>
					Tous
				</button>
				<button
					className="bg-red-500 mr-4 rounded-full hover:bg-red-600 transition px-6 py-2 text-white"
					onClick={() => F_saveurs("avocat")}
				>
					Avocat
				</button>
				<button
					className="bg-red-500 mr-4 rounded-full hover:bg-red-600 transition px-6 py-2 text-white"
					onClick={() => F_saveurs("coriandre")}
				>
					Coriandre
				</button>
				<button
					className="bg-red-500 mr-4 rounded-full hover:bg-red-600 transition px-6 py-2 text-white"
					onClick={() => F("California Saumon Avocat")}
				>
					California Saumon Avocat
				</button>
				<button
					className="bg-blue-600 mr-4 rounded-full hover:bg-blue-700 transition px-6 py-2 text-white"
					onClick={() => F_Croissant()}
				>
					Prix Croissant ↑
				</button>
				<button
					className="bg-blue-600 mr-4 rounded-full hover:bg-blue-700 transition px-6 py-2 text-white"
					onClick={() => F_Decroissant()}
				>
					Prix Décroissant ↓
				</button>
			</div>
		</>
	);
}

export default Filtre;
