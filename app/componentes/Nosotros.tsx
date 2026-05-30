export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-amber-50 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">¿Quiénes Somos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              El Centro de Desarrollo de Negocios Sercotec Santiago es un espacio de apoyo estratégico donde micro, pequeñas empresas y cooperativas reciben asesoría técnica, capacitación y vinculación personalizada y sin costo.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Con un fuerte compromiso territorial, trabajamos junto a una red de socios públicos, privados y académicos para impulsar la profesionalización, el crecimiento sostenible y la competitividad empresarial.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              En las comunas de Santiago existe un universo de más de 140.000 empresas. En nuestros 10 años de trayectoria hemos atendido directamente a más de 3.200 empresas e indirectamente a más de 20.000.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Nuestro Equipo</h3>
            <img
              src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-equipo-negocios-trabajando-juntos-proyecto-cohete-fondo-que-simboliza-sus-objetivos_520881-6067.jpg?w=2000"
              alt="Nuestro Equipo SERCOTEC"
              className="rounded-xl shadow-lg w-3/4 mx-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-600 text-white rounded-xl p-8">
            <p className="text-5xl font-bold text-orange-400 mb-2">3.200+</p>
            <p className="text-lg">Empresas atendidas</p>
          </div>
          <div className="bg-blue-600 text-white rounded-xl p-8">
            <p className="text-5xl font-bold text-orange-400 mb-2">1.834</p>
            <p className="text-lg">Nuevos empleos generados</p>
          </div>
          <div className="bg-blue-600 text-white rounded-xl p-8">
            <p className="text-5xl font-bold text-orange-400 mb-2">10</p>
            <p className="text-lg">Años de trayectoria</p>
          </div>
        </div>
      </div>
    </section>
  )
}