import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Cuándo me puedo mudar?",
      a: "En 15 días. Así de simple."
    },
    {
      q: "¿Y si necesito un crédito?",
      a: "Trabajamos con todos los bancos y te ayudamos a gestionarlo."
    },
    {
      q: "¿Por qué Sibaria y no otro desarrollo?",
      a: "Porque no está en preventa, las amenidades ya están operativas y la ubicación es imbatible."
    },
    {
      q: "¿Hay opciones para personalizar mi casa?",
      a: "El diseño es homogéneo para que el desarrollo suba de valor y así, tu patrimonio también, pero puedes hacer ajustes en interiores por tu cuenta."
    },
    {
      q: "¿Puedo comprar para inversión?",
      a: "Definitivamente. Plusvalía garantizada y alta demanda de renta."
    }
  ];

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div key={`faq-${i}`} className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-200 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}