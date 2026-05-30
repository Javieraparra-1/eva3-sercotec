

const eventos = [
  {
    id: 1,
    fecha: "05",
    mes: "Jun",
    titulo: "Taller: Cómo acceder a financiamiento SERCOTEC",
    hora: "10:00 - 12:00 hrs",
    lugar: "Manuel Rodríguez Sur 749, Santiago",
    tipo: "Presencial"
  },
  {
    id: 2,
    fecha: "12",
    mes: "Jun",
    titulo: "Seminario de Marketing Digital para Pymes",
    hora: "15:00 - 17:00 hrs",
    lugar: "Online via Zoom",
    tipo: "Online"
  },
  {
    id: 3,
    fecha: "19",
    mes: "Jun",
    titulo: "Networking Empresarial Santiago Centro",
    hora: "18:00 - 20:00 hrs",
    lugar: "Hub Santiago, Santiago Centro",
    tipo: "Presencial"
  },
  {
    id: 4,
    fecha: "26",
    mes: "Jun",
    titulo: "Taller: Administración y Finanzas Básicas",
    hora: "09:00 - 11:00 hrs",
    lugar: "Los Jesuitas 881, Providencia",
    tipo: "Presencial"
  }
]

export default function Eventos() {
  return (
    <section id="eventos" className="bg-amber-100 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">Próximos Eventos</h2>
        <p className="text-center text-gray-600 mb-12">Participa en nuestros talleres, seminarios y actividades de networking. Todos gratuitos.</p>
        <div className="flex flex-col gap-6">
          {eventos.map((evento) => (
            <div key={evento.id} className="bg-white rounded-xl shadow-md p-6 flex gap-6 items-center hover:shadow-xl transition">
              <div className="bg-blue-600 text-white rounded-xl p-4 text-center min-w-16">
                <p className="text-3xl font-bold">{evento.fecha}</p>
                <p className="text-sm text-blue-200">{evento.mes}</p>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-blue-700 mb-1">{evento.titulo}</h3>
                <p className="text-gray-500 text-sm">🕐 {evento.hora}</p>
                <p className="text-gray-500 text-sm">📍 {evento.lugar}</p>
              </div>
              <div>
                <span className={`text-sm font-bold py-1 px-4 rounded-full ${evento.tipo === "Online" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-600"}`}>
                  {evento.tipo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}