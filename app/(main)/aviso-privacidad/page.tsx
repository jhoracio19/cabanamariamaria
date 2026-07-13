export const metadata = {
  title: "Aviso de Privacidad | Cabaña María María",
  description: "Aviso de privacidad de Cabaña María María, Tlaxcala.",
};

export default function AvisoPrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-[#5C4033] font-bold mb-4">
          Aviso de Privacidad
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Última actualización: julio de 2026
        </p>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8 text-[#2D3748]/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-3">
              Responsable de tus datos
            </h2>
            <p>
              Cabaña María María, con domicilio en Privada el Palmar #5, La
              Trinidad Tepehitec, Tlaxcala, Tlax., México, CP 90110, es
              responsable del tratamiento de tus datos personales conforme a
              este aviso de privacidad.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-3">
              ¿Qué datos recabamos?
            </h2>
            <p>
              Cuando nos contactas por WhatsApp, teléfono o al agendar una
              visita, podemos recabar tu nombre, número de teléfono y los
              datos de tu evento (fecha, número de invitados, tipo de
              celebración) que tú decidas compartirnos para poder cotizar y
              organizar tu evento. No contamos con un formulario en el sitio
              que recabe estos datos directamente: la conversación ocurre en
              WhatsApp, sujeta también a las políticas de privacidad de esa
              plataforma.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-3">
              ¿Para qué usamos tus datos?
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Cotizar y dar seguimiento a tu evento.</li>
              <li>Coordinar la logística de tu celebración (fecha, invitados, servicios contratados).</li>
              <li>Contactarte para confirmar detalles antes y después de tu evento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-3">
              Uso de cookies y analítica
            </h2>
            <p>
              Este sitio utiliza Google Analytics y Vercel Analytics para
              entender, de forma agregada, cómo se usa la página (por
              ejemplo, qué botones se presionan). Esta información no
              identifica a una persona en particular.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-3">
              Transferencia de datos
            </h2>
            <p>
              No compartimos tus datos personales con terceros, salvo que sea
              necesario para brindarte el servicio contratado (por ejemplo,
              proveedores que participen directamente en tu evento) o cuando
              exista una obligación legal para hacerlo.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-3">
              Derechos ARCO
            </h2>
            <p>
              Puedes solicitar acceder, rectificar, cancelar u oponerte al
              uso de tus datos personales (derechos ARCO) escribiéndonos al{" "}
              <a
                href="https://wa.me/522462132732"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D35400] font-bold hover:underline"
              >
                +52 246 213 2732
              </a>
              , indicando tu solicitud. Atenderemos tu petición en un plazo
              razonable.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#5C4033] mb-3">
              Cambios a este aviso
            </h2>
            <p>
              Podemos actualizar este aviso de privacidad en caso de cambios
              en nuestros procesos o requerimientos legales. Cualquier
              cambio se publicará en esta misma página.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
