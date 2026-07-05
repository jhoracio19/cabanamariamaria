
export default function Gourmet() {
  return (
    <>
              {/* 3. SECCIÓN ESPECIALIDADES 3 TIEMPOS ($380) */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Especialidades Gourmet (3 Tiempos)</h2>
          <span className="inline-block bg-[#5C4033] text-white px-8 py-2 rounded-full text-2xl font-bold shadow-lg">
            $360 por persona
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Menú 1",
              items: ["Ensalada Italiana", "Crema de Nuez con un toque de Amaretto", "Lomo en Salsa de Mango"]
            },
            {
              title: "Menú 2",
              items: ["Empanada de Atún", "Fettuccine Alfredo", "Lomo de Cerdo al Ajo Arriero"]
            },
            {
              title: "Menú 3",
              items: ["Ensalada Crujiente Cítrica", "Crema de Papa con Tocineta", "Suprema de Pollo Rellena de Pimientos"]
            },
            {
              title: "Menú 4",
              items: ["Ensalada Mixta", "Crema Brócoli VI Quesos", "Pollo en Costra de Cacahuate"]
            }
          ].map((menu, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#D35400] mb-4 border-b pb-2">{menu.title}</h4>
              <ul className="text-xs text-gray-600 space-y-3 font-medium">
                <li><span className="text-[#5C4033] block text-[10px] uppercase font-bold">Entrada</span> {menu.items[0]}</li>
                <li><span className="text-[#5C4033] block text-[10px] uppercase font-bold">Sopa/Crema</span> {menu.items[1]}</li>
                <li><span className="text-[#5C4033] block text-[10px] uppercase font-bold">Fuerte</span> {menu.items[2]}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
