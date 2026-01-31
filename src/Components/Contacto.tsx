import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    // Importante: Eliminar la clase 'bg-white' de la sección para que se vea el degradado global
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-16 text-center">
          Contacto
        </h2>

        {/* Contenedor principal con diseño asimétrico */}
        <div className="grid md:grid-cols-12 gap-8">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="md:col-span-5">
            <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Send className='w-6 h-6 text-slate-700'/> Hablemos
              </h3>
              <p className="text-slate-700 mb-8 leading-relaxed">
                Estoy disponible para oportunidades de trabajo, colaboraciones
                o simplemente para conversar sobre tecnología y proyectos interesantes.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'francisco.mora09@hotmail.com', href: 'mailto:francisco.mora09@hotmail.com' },
                  { icon: Phone, label: 'Teléfono', value: '+57 3173778472', href: 'tel:+573173778472' },
                  { icon: MapPin, label: 'Ubicación', value: 'Floridablanca, Colombia', href: 'https://www.google.com/maps/place/floridablanca/data=!4m2!3m1!1s0x8e683f61d96e0699:0x247ca9bc744c07f0?sa=X&ved=1t:155783&ictx=111' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center text-slate-800 group-hover:bg-white transition-colors shadow-sm">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      {item.href !== '#' ? (
                        <a href={item.href} className="text-slate-900 font-semibold hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Contacto */}
          <div className="md:col-span-7">
             <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-xl h-full">
              <form className="space-y-5">
                {['Nombre', 'Email'].map((label) => (
                  <div key={label}>
                    <label htmlFor={label.toLowerCase()} className="block text-sm font-semibold text-slate-700 mb-1">
                      {label}
                    </label>
                    <input
                      type={label === 'Email' ? 'email' : 'text'}
                      id={label.toLowerCase()}
                      className="w-full px-4 py-3 border border-white/50 bg-white/70 rounded-xl focus:ring-2 focus:ring-slate-800 focus:border-slate-800 outline-none text-slate-800 placeholder-slate-400 transition-colors"
                      placeholder={`Tu ${label.toLowerCase()}`}
                    />
                  </div>
                ))}
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-white/50 bg-white/70 rounded-xl focus:ring-2 focus:ring-slate-800 focus:border-slate-800 outline-none resize-none text-slate-800 placeholder-slate-400 transition-colors"
                    placeholder="Tu mensaje..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 transition-all transform hover:scale-[1.01] shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
