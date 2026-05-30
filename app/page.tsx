import Navbar from "@/app/componentes/Navbar"
import Hero from "@/app/componentes/Hero"
import Nosotros from "@/app/componentes/Nosotros"
import Servicios from "@/app/componentes/Servicios"
import Noticias from "@/app/componentes/Noticias"
import Eventos from "@/app/componentes/Eventos"
import Testimonios from "@/app/componentes/Testimonios"
import Preguntas from "@/app/componentes/Preguntas"
import Contacto from "@/app/componentes/Contacto"
import Footer from "@/app/componentes/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Noticias />
      <Eventos />
      <Testimonios />
      <Preguntas />
      <Contacto />
      <Footer />
    </main>
  )
}