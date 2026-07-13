import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Puedo llevar mi propia música y se permite el alcohol?",
    answer:
      "Sí, puedes contratar tu propio servicio de música o DJ, y sí se permite el consumo de alcohol durante tu evento.",
  },
  {
    question:
      "¿Puedo llevar mi propia decoración o proveedores externos (decorador, fotógrafo, etc.)?",
    answer:
      "Sí, puedes traer tu propia decoración y contratar los proveedores externos que prefieras para tu evento.",
  },
  {
    question: "¿Cómo aparto mi fecha?",
    answer:
      "Apartas tu fecha con el 30% de anticipo del costo total de tu evento.",
  },
];

export function Faq() {
  return (
    <section id="preguntas-frecuentes" className="py-20 md:py-28 bg-[#FAF9F6] scroll-mt-20 md:scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[#D35400] font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 block">
            Antes de Cotizar
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#5C4033] mb-6 leading-tight">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-1 bg-[#D35400] mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 px-6 md:px-10">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="font-serif text-lg md:text-xl text-[#5C4033] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#2D3748]/70 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
