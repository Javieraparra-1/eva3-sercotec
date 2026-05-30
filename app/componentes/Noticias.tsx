const noticias = [
  {
    id: 1,
    fecha: "15 Mayo 2026",
    titulo: "SERCOTEC lanza nuevo programa de digitalización para pymes",
    descripcion: "El programa busca incorporar herramientas digitales en micro y pequeñas empresas de Santiago y Providencia de manera gratuita.",
    imagen: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    fecha: "02 Mayo 2026",
    titulo: "Taller gratuito de marketing digital para emprendedores",
    descripcion: "Aprende a usar redes sociales y herramientas digitales para hacer crecer tu negocio. Cupos limitados.",
    imagen: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    fecha: "20 Abril 2026",
    titulo: "Centro de Negocios Santiago supera las 3.200 empresas atendidas",
    descripcion: "Un hito histórico para el centro que lleva 10 años apoyando el crecimiento de micro y pequeñas empresas en la región.",
    imagen: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop"
  }
]

export default function Noticias() {
  return (
    <section id="noticias" className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">Últimas Noticias</h2>
        <p className="text-center text-gray-600 mb-12">Mantente informado sobre nuestras actividades y programas.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="bg-amber-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-orange-500 text-sm font-bold">{noticia.fecha}</span>
                <h3 className="text-lg font-bold text-blue-700 mt-2 mb-3">{noticia.titulo}</h3>
                <p className="text-gray-600 text-sm">{noticia.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}