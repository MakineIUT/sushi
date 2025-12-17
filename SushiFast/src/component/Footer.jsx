import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="w-full bg-white shadow-md mt-12 border-t border-gray-200">
			<div className="max-w-7xl mx-auto px-8 py-10">
				{/* Top Section: Columns */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
					{/* Column 1: Logo & Brand */}
					<div>
						<Link
							to="/"
							className="text-2xl font-bold text-red-600"
						>
							SushiFast
						</Link>
						<p className="text-sm text-gray-500 mt-2">
							La fraîcheur du Japon, livrée chez vous.
						</p>
					</div>

					{/* Column 2: Pages */}
					<div>
						<h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
							Pages
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/"
									className="text-sm text-gray-600 hover:text-red-600 transition"
								>
									Accueil
								</Link>
							</li>
							<li>
								<Link
									to="/menus"
									className="text-sm text-gray-600 hover:text-red-600 transition"
								>
									Nos Menus
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3: Produit par */}
					<div>
						<h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
							Produit par
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="https://www.linkedin.com/in/hugo-vitor-goncalves-fernandes-bb9701299/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-gray-600 hover:text-red-600 transition"
								>
									Hugo Vitor Goncalves Fernandes
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/makine-mhoumadi-1a3ba121b/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-gray-600 hover:text-red-600 transition"
								>
									Makine Mhoumadi
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar: Copyright */}
				<div className="border-t border-gray-200 pt-6 flex justify-center items-center text-center">
					<p className="text-sm text-gray-500">
						&copy; {new Date().getFullYear()} SushiFast Inc. Tous
						droits réservés.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
