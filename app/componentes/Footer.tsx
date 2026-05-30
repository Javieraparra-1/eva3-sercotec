export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-orange-400 font-bold text-lg mb-4">SERCOTEC Santiago</h3>
          <p className="text-gray-400 text-sm mb-2">Centro de Desarrollo de Negocios</p>
          <p className="text-gray-400 text-sm">Apoyando el crecimiento de micro y pequeñas empresas desde hace 10 años.</p>
        </div>
        <div>
          <h3 className="text-orange-400 font-bold text-lg mb-4">Contacto</h3>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm flex items-center gap-2">📍 Manuel Rodríguez Sur 749, Santiago</p>
            <p className="text-gray-400 text-sm flex items-center gap-2">📞 +56 9 3927 5633</p>
            <p className="text-gray-400 text-sm flex items-center gap-2">✉️ centro.santiago@centrossercotec.cl</p>
            <p className="text-gray-400 text-sm flex items-center gap-2">🕐 Lunes a Viernes 9:00 - 18:00 hrs</p>
          </div>
        </div>
        <div>
          <h3 className="text-orange-400 font-bold text-lg mb-4">Síguenos</h3>
          <div className="flex flex-col gap-2">
            <a href="https://www.facebook.com/centrodnsantiago" target="_blank" className="text-gray-400 text-sm flex items-center gap-2 hover:text-orange-400 transition">
              📘 Facebook
            </a>
            <a href="https://www.instagram.com/centrodnsantiago/" target="_blank" className="text-gray-400 text-sm flex items-center gap-2 hover:text-orange-400 transition">
              📷 Instagram
            </a>
            <a href="https://wa.me/56939275633" target="_blank" className="text-gray-400 text-sm flex items-center gap-2 hover:text-orange-400 transition">
              💬 WhatsApp
            </a>
          </div>
          <div className="mt-4">
            <h4 className="text-orange-400 font-bold mb-2">Navegación</h4>
            <div className="flex flex-col gap-1">
              <a href="#nosotros" className="text-gray-400 text-sm hover:text-orange-400 transition">Nosotros</a>
              <a href="#servicios" className="text-gray-400 text-sm hover:text-orange-400 transition">Servicios</a>
              <a href="#contacto" className="text-gray-400 text-sm hover:text-orange-400 transition">Contacto</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © 2026 SERCOTEC Santiago. Todos los derechos reservados.
      </div>
    </footer>
  )
}