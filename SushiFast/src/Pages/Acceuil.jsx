

function Acceuil() {    


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 text-gray-800">
      

      <main className="max-w-5xl mx-auto px-6 py-10">
        <section id="acceuil" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-rose-600 mb-4">Réservez facilement vos sushis</h2>
            <p className="mb-6 text-gray-600">
              SushiFast vous propose une expérience rapide et savoureuse. Réservez votre table ou commandez à emporter en quelques clics.
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-rose-600 rounded-full mr-2" />
                Produits frais
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-rose-600 rounded-full mr-2" />
                Réservation rapide
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-rose-600 rounded-full mr-2" />
                Click & Collect
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-rose-600 rounded-full mr-2" />
                Livraison
              </li>
            </ul>
          </div>

          <aside id="reservation" className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Réserver une table</h3>
            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="name"
                  required
                  placeholder="Nom"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Téléphone"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <input name="date" type="date" required className="border rounded px-3 py-2" />
                <input name="time" type="time" required className="border rounded px-3 py-2" />
                <select name="people" defaultValue="2" className="border rounded px-3 py-2">
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes</option>
                  <option value="3">3 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="5">5+ personnes</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded shadow"
                >
                  Confirmer la réservation
                </button>
              </div>
            </form>
          </aside>
        </section>

        <section id="menu" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Nos spécialités</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg shadow p-4">
              <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">
                Image Maki
              </div>
              <h4 className="font-semibold">Maki saumon</h4>
              <p className="text-sm text-gray-600">Maki frais et savoureux, servi avec sauce soja.</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="font-bold">8€</span>
                <button className="text-rose-600 hover:underline text-sm">Commander</button>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow p-4">
              <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">
                Image Nigiri
              </div>
              <h4 className="font-semibold">Nigiri assortiment</h4>
              <p className="text-sm text-gray-600">Selection de nigiris frais, parfait pour partager.</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="font-bold">12€</span>
                <button className="text-rose-600 hover:underline text-sm">Commander</button>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow p-4">
              <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">
                Image Bento
              </div>
              <h4 className="font-semibold">Bento Sushi</h4>
              <p className="text-sm text-gray-600">Repas complet avec soupe et salade.</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="font-bold">14€</span>
                <button className="text-rose-600 hover:underline text-sm">Commander</button>
              </div>
            </article>
          </div>
        </section>
      </main>

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
    