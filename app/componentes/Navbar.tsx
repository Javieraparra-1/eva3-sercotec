export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img
          src="https://sitios.sercotec.cl/centros-de-negocios/wp-content/uploads/sites/4/2021/11/cropped-logo-cdn-2021.png"
          alt="Logo SERCOTEC"
          className="h-10"
        />
        <span className="text-xl font-bold text-orange-400">SERCOTEC Santiago</span>
      </div>
      <ul className="flex gap-8 text-sm font-medium">
        <li><a href="#nosotros" className="hover:text-orange-400 transition">Nosotros</a></li>
        <li><a href="#servicios" className="hover:text-orange-400 transition">Servicios</a></li>
        <li><a href="#testimonios" className="hover:text-orange-400 transition">Testimonios</a></li>
        <li><a href="#preguntas" className="hover:text-orange-400 transition">Preguntas</a></li>
        <li><a href="#contacto" className="hover:text-orange-400 transition">Contacto</a></li>
      </ul>
    </nav>
  )
}