import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productora Audiovisual en Monterrey | 1998 Films',
  description: 'Videoclips, comerciales y contenido cinematográfico. Dirección de foto, drones y postproducción. Cotiza tu proyecto hoy.',
  openGraph: {
    title: 'Productora Audiovisual en Monterrey | 1998 Films',
    description: 'Videoclips, comerciales y contenido cinematográfico. Dirección de foto, drones y postproducción.',
    images: ['/og-image.svg'],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 neon">
            1998 Films
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Productora audiovisual en Monterrey especializada en videoclips, comerciales y contenido cinematográfico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-glow"
            >
              Cotizar Proyecto
            </a>
            <a 
              href="/proyectos" 
              className="border border-white/20 hover:border-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-glow"
            >
              Ver Portafolio
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Especialistas en producción audiovisual con enfoque cinematográfico y atención al detalle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Videoclips', desc: 'Producción de videoclips musicales con calidad cinematográfica' },
              { name: 'Comerciales', desc: 'Spots publicitarios que conectan con tu audiencia' },
              { name: 'Contenido Digital', desc: 'Videos para redes sociales y plataformas digitales' },
              { name: 'Dirección de Foto', desc: 'Iluminación y composición cinematográfica profesional' },
              { name: 'Drones', desc: 'Aerial cinematography y tomas aéreas espectaculares' },
              { name: 'Post-producción', desc: 'Edición, color grading y efectos visuales' },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg border border-white/10 hover:border-red-500/50 transition-colors cursor-glow"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Metodología probada que garantiza resultados excepcionales en cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Brief', desc: 'Entendemos tus objetivos y visión' },
              { step: '02', title: 'Tratamiento', desc: 'Desarrollamos el concepto creativo' },
              { step: '03', title: 'Pre-producción', desc: 'Planificamos cada detalle' },
              { step: '04', title: 'Rodaje', desc: 'Capturamos la magia cinematográfica' },
              { step: '05', title: 'Post-producción', desc: 'Editamos y damos vida al proyecto' },
              { step: '06', title: 'Entrega', desc: 'Entregamos tu proyecto finalizado' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            ¿Listo para Crear Algo Increíble?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te ayudaremos a llevarlo al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-glow"
            >
              Cotizar Proyecto
            </a>
            <a 
              href="/proyectos" 
              className="border border-white/20 hover:border-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-glow"
            >
              Ver Portafolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
