import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1998 Films | Productora Audiovisual Cinematográfica en Monterrey',
  description: 'Productora audiovisual de élite en Monterrey. Especialistas en videoclips, comerciales premium, dirección de foto cinematográfica, drones profesionales y post-producción de nivel Hollywood. Transformamos visiones en películas.',
  keywords: 'productora audiovisual monterrey, videoclips cinematográficos, comerciales premium, dirección de foto, drones profesionales, post-producción hollywood, cinematografía, producción audiovisual élite',
  openGraph: {
    title: '1998 Films | Productora Audiovisual Cinematográfica de Élite',
    description: 'Transformamos visiones en películas. Videoclips, comerciales premium y contenido cinematográfico de nivel Hollywood en Monterrey.',
    images: ['/og-image.svg'],
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1998 Films | Productora Audiovisual Cinematográfica',
    description: 'Transformamos visiones en películas. Nivel Hollywood en Monterrey.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-red-500/5 animate-pulse"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4">
            {/* Logo Animation */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400 mb-4 animate-pulse">
                1998
              </h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-wider">
                FILMS
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transformamos <span className="text-red-400 font-semibold">visiones</span> en{' '}
              <span className="text-red-400 font-semibold">películas</span>
            </p>
            
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              Productora audiovisual de élite en Monterrey. Especialistas en cinematografía de nivel Hollywood.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contacto" 
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
              >
                <span className="relative z-10">Cotizar Proyecto</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="/proyectos" 
                className="group relative px-8 py-4 border-2 border-white/30 text-white text-lg font-bold rounded-lg overflow-hidden transition-all duration-300 hover:border-red-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
              >
                <span className="relative z-10">Ver Portafolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-red-500/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Nuestros <span className="text-red-400">Servicios</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Especialistas en producción audiovisual con enfoque cinematográfico y atención al detalle. 
              Cada proyecto es una obra maestra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎬',
                title: 'Videoclips Cinematográficos',
                description: 'Producción de videoclips musicales con calidad de cine. Dirección de arte, iluminación cinematográfica y narrativa visual.',
                features: ['Dirección de arte', 'Iluminación cinematográfica', 'Narrativa visual']
              },
              {
                icon: '📺',
                title: 'Comerciales Premium',
                description: 'Spots publicitarios que conectan emocionalmente. Storytelling poderoso y producción de nivel Hollywood.',
                features: ['Storytelling emocional', 'Producción premium', 'Branding visual']
              },
              {
                icon: '🎥',
                title: 'Dirección de Foto',
                description: 'Iluminación y composición cinematográfica profesional. Cada frame es una obra de arte.',
                features: ['Iluminación cinematográfica', 'Composición artística', 'Color grading']
              },
              {
                icon: '🚁',
                title: 'Drones Profesionales',
                description: 'Aerial cinematography y tomas aéreas espectaculares. Perspectivas únicas y movimientos fluidos.',
                features: ['Aerial cinematography', 'Movimientos fluidos', 'Perspectivas únicas']
              },
              {
                icon: '🎨',
                title: 'Post-Producción Élite',
                description: 'Edición, color grading y efectos visuales de nivel Hollywood. Transformamos el material en magia.',
                features: ['Edición cinematográfica', 'Color grading', 'VFX profesionales']
              },
              {
                icon: '🌟',
                title: 'Contenido Digital',
                description: 'Videos para redes sociales y plataformas digitales. Contenido viral y engagement máximo.',
                features: ['Contenido viral', 'Engagement máximo', 'Optimización digital']
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 animate-bounce">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-white/60 text-sm flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-red-500/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Nuestro <span className="text-red-400">Proceso</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Metodología probada que garantiza resultados excepcionales. 
              Cada paso es una obra maestra en construcción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Brief Creativo',
                description: 'Entendemos tu visión, objetivos y audiencia. Creamos la base para algo extraordinario.',
                icon: '💡'
              },
              {
                step: '02',
                title: 'Tratamiento Visual',
                description: 'Desarrollamos el concepto creativo y la narrativa visual. Cada detalle cuenta una historia.',
                icon: '🎨'
              },
              {
                step: '03',
                title: 'Pre-Producción',
                description: 'Planificamos cada detalle: casting, locaciones, equipos y logística cinematográfica.',
                icon: '📋'
              },
              {
                step: '04',
                title: 'Rodaje Élite',
                description: 'Capturamos la magia cinematográfica. Cada toma es una obra de arte en movimiento.',
                icon: '🎬'
              },
              {
                step: '05',
                title: 'Post-Producción',
                description: 'Editamos, damos color y efectos visuales. Transformamos el material en magia pura.',
                icon: '🎭'
              },
              {
                step: '06',
                title: 'Entrega Premium',
                description: 'Entregamos tu proyecto finalizado con calidad de cine. Listo para impactar al mundo.',
                icon: '🏆'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/30">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-red-500/10"></div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            ¿Listo para Crear <span className="text-red-400">Magia</span>?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Cuéntanos sobre tu proyecto y te ayudaremos a llevarlo al siguiente nivel. 
            Transformemos tu visión en una obra maestra cinematográfica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="/contacto" 
              className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white text-xl font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
            >
              <span className="relative z-10">Cotizar Proyecto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="/proyectos" 
              className="group relative px-10 py-5 border-2 border-white/30 text-white text-xl font-bold rounded-xl overflow-hidden transition-all duration-300 hover:border-red-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
            >
              <span className="relative z-10">Ver Portafolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
