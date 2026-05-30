"use client"
import { useState } from "react"

const preguntas = [
  {
    id: 1,
    pregunta: "¿Quiénes pueden acceder a los servicios?",
    respuesta: "Micro y pequeños empresarios, emprendedores y cooperativas de las comunas de Santiago y Providencia pueden acceder a todos nuestros servicios de forma gratuita."
  },
  {
    id: 2,
    pregunta: "¿Los servicios tienen algún costo?",
    respuesta: "No, todos los servicios del Centro de Desarrollo de Negocios Sercotec Santiago son completamente gratuitos para los beneficiarios."
  },
  {
    id: 3,
    pregunta: "¿Cómo puedo agendar una asesoría?",
    respuesta: "Puedes contactarnos a través del formulario de contacto, llamar al +56 9 3927 5633 o visitarnos directamente en Manuel Rodríguez Sur 749, Santiago (Metro Toesca)."
  },
  {
    id: 4,
    pregunta: "¿Los profesionales están acreditados para asesorar?",
    respuesta: "Sí, contamos con un equipo de asesores altamente calificados con formación profesional en áreas de administración, finanzas, marketing y gestión empresarial. Todos tienen experiencia comprobada en el mundo de los negocios."
  },
  {
    id: 5,
    pregunta: "¿Quiénes son los profesionales del centro?",
    respuesta: "Nuestro equipo está liderado por Christian Gacitúa como Jefe de Centro, con el apoyo de asesores especializados como Francisco Ramírez, Pablo Andrewartha, Tania Avillo y Mauricio Vargas, además de la asistente ejecutiva María Victoria Cuevas."
  },
  {
    id: 6,
    pregunta: "¿Dónde están ubicados?",
    respuesta: "Centro principal en Manuel Rodríguez Sur 749, Santiago (Metro Toesca). También contamos con un Centro Satélite en Los Jesuitas 881, Providencia, y puntos de atención en universidades UTEM, Universidad Autónoma y DUOC Alameda."
  },
  {
    id: 7,
    pregunta: "¿Cuál es el horario de atención?",
    respuesta: "Lunes a viernes de 9:00 a 18:00 hrs en el centro principal. El centro satélite de Providencia atiende martes y jueves de 9:00 a 13:00 hrs."
  },
  {
    id: 8,
    pregunta: "¿Cuánto tiempo dura el proceso de acompañamiento?",
    respuesta: "El acompañamiento se adapta a las necesidades de cada empresa. Puede ir desde una consulta rápida de 20 minutos en nuestro Consultorio Empresarial hasta planes de trabajo personalizados de varios meses."
  }
]

export default function Preguntas() {
  const [abierta, setAbierta] = useState<number | null>(null)

  return (
    <section id="preguntas" className="bg-amber-100 py-20 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">Preguntas Frecuentes</h2>
        <p className="text-center text-gray-600 mb-12">Resolvemos tus dudas más comunes sobre nuestros servicios.</p>
        {preguntas.map((p) => (
          <div key={p.id} className="mb-4 bg-white rounded-xl shadow hover:shadow-md transition">
            <button
              onClick={() => setAbierta(abierta === p.id ? null : p.id)}
              className="w-full text-left p-6 font-bold text-blue-700 flex justify-between items-center"
            >
              {p.pregunta}
              <span className="text-orange-500 text-xl">{abierta === p.id ? "▲" : "▼"}</span>
            </button>
            {abierta === p.id && (
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">{p.respuesta}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}