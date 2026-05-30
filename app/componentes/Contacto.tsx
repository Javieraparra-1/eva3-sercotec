"use client"
import { useState } from "react"

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", servicio: "", mensaje: "" })
  const [enviado, setEnviado] = useState(false)
  const [errores, setErrores] = useState<any>({})

  const validar = () => {
    const e: any = {}
    if (!form.nombre) e.nombre = "El nombre es requerido"
    if (!form.email || !form.email.includes("@")) e.email = "Email inválido"
    if (!form.mensaje) e.mensaje = "El mensaje es requerido"
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const erroresValidacion = validar()
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion)
      return
    }
    setEnviado(true)
  }

  return (
    <section id="contacto" className="bg-gray-200 py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">Contáctanos</h2>
        <p className="text-center text-gray-600 mb-12">Estamos aquí para ayudarte. Escríbenos y te responderemos a la brevedad.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-700 text-white rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-orange-400">Información de Contacto</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold">Dirección Principal</p>
                  <p className="text-blue-200 text-sm">Manuel Rodríguez Sur 749, Santiago (Metro Toesca)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-bold">Teléfono</p>
                  <p className="text-blue-200 text-sm">+56 9 3927 5633</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-bold">Correo</p>
                  <p className="text-blue-200 text-sm">centro.santiago@centrossercotec.cl</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-bold">Horario</p>
                  <p className="text-blue-200 text-sm">Lunes a Viernes 9:00 - 18:00 hrs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold">Centro Satélite Providencia</p>
                  <p className="text-blue-200 text-sm">Los Jesuitas 881, Providencia</p>
                  <p className="text-blue-200 text-sm">Martes y Jueves 9:00 - 13:00 hrs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow">
            {enviado ? (
              <div className="bg-green-100 text-green-700 p-6 rounded-xl text-center font-bold">
                ¡Mensaje enviado correctamente! Te contactaremos pronto.
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errores.nombre && <p className="text-red-500 text-sm">{errores.nombre}</p>}
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errores.email && <p className="text-red-500 text-sm">{errores.email}</p>}
                <select
                  value={form.servicio}
                  onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                  className="border p-3 rounded-lg text-gray-600 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Asesoría Empresarial">Asesoría Empresarial</option>
                  <option value="Capacitación">Capacitación</option>
                  <option value="Vinculación Empresarial">Vinculación Empresarial</option>
                  <option value="Mentoría Especializada">Mentoría Especializada</option>
                  <option value="Innovación y Digitalización">Innovación y Digitalización</option>
                  <option value="Consultorio Empresarial">Consultorio Empresarial</option>
                </select>
                <textarea
                  placeholder="Mensaje..."
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="border p-3 rounded-lg h-40 focus:outline-none focus:border-blue-500"
                />
                {errores.mensaje && <p className="text-red-500 text-sm">{errores.mensaje}</p>}
                <button
                  onClick={handleSubmit}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
                >
                  Enviar mensaje
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}