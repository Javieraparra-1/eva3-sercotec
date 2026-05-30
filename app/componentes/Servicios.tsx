const servicios = [
  {
    id: 1,
    titulo: "Asesoría Empresarial",
    descripcion: "Diagnóstico y planes de mejora personalizados para tu negocio. Nuestros expertos analizan tu situación actual y proponen soluciones concretas.",
    imagen: "https://placehold.co/400x200/1d4ed8/ffffff?text=Asesoria+Empresarial"
  },
  {
    id: 2,
    titulo: "Capacitación",
    descripcion: "Talleres especializados en administración, finanzas, marketing digital e innovación. Aprende con expertos del mundo empresarial.",
    imagen: "https://placehold.co/400x200/1d4ed8/ffffff?text=Capacitacion"
  },
  {
    id: 3,
    titulo: "Vinculación Empresarial",
    descripcion: "Networking, articulación con instituciones públicas y privadas, y acceso a programas de financiamiento para hacer crecer tu negocio.",
    imagen: "https://placehold.co/400x200/1d4ed8/ffffff?text=Vinculacion"
  },
  {
    id: 4,
    titulo: "Mentoría Especializada",
    descripcion: "Accede a mentores con experiencia en tu sector. Te acompañamos en cada etapa del desarrollo de tu empresa.",
    imagen: "https://placehold.co/400x200/1d4ed8/ffffff?text=Mentoria"
  },
  {
    id: 5,
    titulo: "Innovación y Digitalización",
    descripcion: "Incorporamos herramientas digitales y estrategias de innovación para modernizar tu negocio y hacerlo más competitivo.",
    imagen: "https://placehold.co/400x200/1d4ed8/ffffff?text=Innovacion"
  },
  {
    id: 6,
    titulo: "Consultorio Empresarial",
    descripcion: "Respuestas rápidas en 20 minutos a tus dudas sobre emprendimiento. Sin cita previa, de manera presencial o virtual.",
    imagen: "https://placehold.co/400x200/1d4ed8/ffffff?text=Consultorio"
  }
]

export default function Servicios() {
  return (
    <section id="servicios" className="bg-amber-50 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">Nuestros Servicios</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Todos nuestros servicios son completamente gratuitos para micro y pequeños empresarios.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={servicio.imagen} alt={servicio.titulo} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2">{servicio.titulo}</h3>
                <p className="text-gray-600 mb-4 text-sm">{servicio.descripcion}</p>
                <a href="#contacto" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition text-sm">
                  Contáctanos
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}