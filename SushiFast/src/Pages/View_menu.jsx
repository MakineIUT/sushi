import { useParams, Link } from "react-router-dom";
import DATAboxes from "../DATA/boxes.json";
import { usePanier } from "../context/PanierContext";

function View_menu() {
	const { id } = useParams();
	const { ajouterAuPanier } = usePanier();

	// On cherche la box qui correspond à l'ID dans l'URL
	// Note: id de l'URL est une string, id du JSON est un nombre
	const box = DATAboxes.find((b) => b.id === parseInt(id));

	if (!box) {
		return (
			<div className="max-w-7xl mx-auto p-8 mt-20 text-center">
				<h2 className="text-2xl font-bold text-gray-700">
					Menu introuvable
				</h2>
				<Link
					to="/menus"
					className="text-red-600 hover:underline mt-4 block"
				>
					Retour aux menus
				</Link>
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto p-8 mt-20">
			<Link
				to="/menus"
				className="inline-flex items-center text-gray-600 hover:text-red-600 mb-6 transition"
			>
				&larr; <span className="ml-2">Retour aux menus</span>
			</Link>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
				<div className="h-full">
					<img
						src={box.image}
						alt={box.nom}
						className="w-full h-full object-contain min-h-[400px]"
					/>
				</div>

				<div className="p-8 lg:p-12 flex flex-col justify-center">
					<h1 className="text-4xl font-bold text-red-600 mb-4">
						{box.nom}
					</h1>
					<p className="text-3xl font-semibold text-gray-800 mb-6">
						{box.prix}€
					</p>

					<div className="mb-8">
						<p className="text-gray-600 mb-2">
							<strong>Pièces:</strong> {box.pieces}
						</p>
						<p className="text-gray-600 mb-4">
							<strong>Saveurs:</strong> {box.saveurs.join(", ")}
						</p>

						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Composition :
						</h3>
						<ul className="space-y-2">
							{box.aliments.map((aliment, index) => (
								<li
									key={index}
									className="flex justify-between items-center border-b border-gray-100 pb-2"
								>
									<span className="text-gray-700">
										{aliment.nom}
									</span>
									<span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">
										x{aliment.quantite}
									</span>
								</li>
							))}
						</ul>
					</div>

					<button
						onClick={() => {
							ajouterAuPanier(box);
							alert(`${box.nom} ajouté au panier!`);
						}}
						className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
					>
						🛒 Ajouter au panier
					</button>
				</div>
			</div>
		</div>
	);
}

export default View_menu;
