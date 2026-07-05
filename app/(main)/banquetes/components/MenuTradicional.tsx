
export default function MenuTradicional() {
  return (
    <>
              {/* 2. SECCIÓN 2 TIEMPOS ($340) */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#5C4033] mb-2">Menú Tradicional a 2 Tiempos</h2>
          <span className="inline-block bg-[#D35400] text-white px-8 py-2 rounded-full text-2xl font-bold shadow-lg">
            $300 por persona
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-md border-l-4 border-[#D35400]">
            <h3 className="font-bold text-[#5C4033] text-xl mb-6">Opción 1</h3>
            <div className="space-y-4">
              <p className="text-sm"><strong className="text-[#D35400]">1er Tiempo:</strong> Sopa mixta.</p>
              <p className="text-sm"><strong className="text-[#D35400]">Plato Fuerte:</strong> Mixiote (2 piezas) acompañado de arroz rojo.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-md border-l-4 border-[#D35400]">
            <h3 className="font-bold text-[#5C4033] text-xl mb-6">Opción 2</h3>
            <div className="space-y-4">
              <p className="text-sm"><strong className="text-[#D35400]">1er Tiempo:</strong> Crema de papa con tocineta y pollo deshebrado.</p>
              <p className="text-sm"><strong className="text-[#D35400]">Plato Fuerte:</strong> Pechuga rellena de pimientos acompañada de espagueti.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
