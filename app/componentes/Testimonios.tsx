"use client"
import { useState } from "react"

const testimonios = [
  { id: 1, nombre: "Karina Martínez", empresa: "Gym", texto: "Gracias a SERCOTEC pude formalizar mi negocio y aumentar mis ventas, mis clientes y mi inversión." },
  { id: 2, nombre: "Ramon Gonzalez", empresa: "Florería", texto: "La asesoría fue clave para ordenar mis finanzas y crecer de manera sostenible." },
  
]

export default function Testimonios() {
  const [actual, setActual] = useState(0)

  return (
    <section id="testimonios" className="bg-blue-600 text-white py-20 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Testimonios</h2>
        <div className="bg-blue-700 rounded-xl p-8 mb-8">
          <p className="text-lg italic mb-4">"{testimonios[actual].texto}"</p>
          <p className="font-bold">{testimonios[actual].nombre}</p>
          <p className="text-blue-300">{testimonios[actual].empresa}</p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActual(actual === 0 ? testimonios.length - 1 : actual - 1)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition"
          >
            ← Anterior
          </button>
          <button
            onClick={() => setActual(actual === testimonios.length - 1 ? 0 : actual + 1)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition"
          >
            Siguiente →
          </button>
        </div>
      </div>
    </section>
  )
}