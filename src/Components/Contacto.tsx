import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Contacto
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            ¿Tienes un proyecto en mente o una oportunidad de colaboración? Escríbeme.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="lg:col-span-5">
            <div className="bg-white/30 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white/50 shadow-xl h-full flex flex-col justify-center transition-all hover:bg-white/40 duration-500">
              <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Send className='w-7 h-7 text-slate-800'/> Hablemos
              </h3>
              <p className="text-slate-700 mb-10 text-lg leading-relaxed">
                Estoy abierto a nuevas oportunidades de trabajo y colaboraciones técnicas. 
                Responderé a tu mensaje lo antes posible.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: 'francisco.mora09@hotmail.com', href: 'mailto:francisco.mora09@hotmail.com' },
                  { icon: Phone, label: 'Teléfono', value: '+57 3173778472', href: 'tel:+573173778472' },
                  { icon: MapPin, label: 'Ubicación', value: 'Floridablanca, Colombia', href: 'https://maps.google.com/?q=Floridablanca,Colombia' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white/70 rounded-2xl flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm transform group-hover:-rotate-3">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={item.label === 'Ubicación' ? "_blank" : "_self"} rel="noreferrer" className="text-slate-900 font-bold text-lg hover:text-indigo-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-bold text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Contacto */}
          <div className="lg:col-span-7">
             <div className="bg-white/30 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white/50 shadow-xl h-full transition-all hover:bg-white/40 duration-500">
              <form 
                className="space-y-6" 
                onSubmit={(e) => { e.preventDefault(); alert("Formulario enviado (simulación)"); }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-bold text-slate-800 mb-2 ml-1">
                      Nombre Completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      className="w-full px-5 py-3.5 border border-white/60 bg-white/60 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none text-slate-900 placeholder-slate-400 transition-all shadow-sm hover:bg-white/80"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-2 ml-1">
                      Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-5 py-3.5 border border-white/60 bg-white/60 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none text-slate-900 placeholder-slate-400 transition-all shadow-sm hover:bg-white/80"
                      placeholder="ejemplo@correo.com"
                    />
                  </div>
                </div>
                
                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-bold text-slate-800 mb-2 ml-1">
                    Tu Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows={5}
                    className="w-full px-5 py-3.5 border border-white/60 bg-white/60 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none resize-none text-slate-900 placeholder-slate-400 transition-all shadow-sm hover:bg-white/80"
                    placeholder="¿En qué te puedo ayudar?..."
                  ></textarea>
                </div>

                {/* Botón Submit */}
                <button
                  type="submit"
                  className="w-full mt-4 px-6 py-4 bg-slate-900 text-white font-bold text-lg rounded-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-slate-400"
                >
                  <Send size={20} /> 
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}