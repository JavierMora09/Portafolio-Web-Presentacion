import { Code, Database, Globe, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-16 text-center">
          Sobre Mí
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Tarjeta Principal: Biografía */}
          <div className="md:col-span-7 bg-white/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/40 shadow-xl flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-800 rounded-2xl shadow-lg">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Mi Perfil</h3>
            </div>
            
            <div className="space-y-6 text-slate-800 text-lg leading-relaxed">
              <p>
                Soy un estudiante apasionado de <span className="font-bold text-slate-900 underline decoration-slate-400 decoration-2">Ingeniería de Sistemas e Informática</span>, 
                próximo a graduarme. Mi enfoque está en el desarrollo de software 
                y la implementación de soluciones tecnológicas que generen un impacto positivo.
              </p>
              <p>
                Durante mi formación académica, he desarrollado habilidades en diversas 
                áreas de la informática, desde el desarrollo web hasta la gestión de bases 
                de datos y arquitectura de software.
              </p>
              <p className="italic text-slate-700">
                "Busco constantemente mejorar mis habilidades y contribuir con proyectos significativos que desafíen mi capacidad técnica."
              </p>
            </div>
          </div>

          {/* Columna de Tarjetas Secundarias */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Pilares */}
            {[
              { 
                icon: <Code size={24} />, 
                title: "Desarrollo de Software", 
                desc: "Experiencia en desarrollo full-stack y aplicaciones web modernas." 
              },
              { 
                icon: <Database size={24} />, 
                title: "Gestión de Datos", 
                desc: "Conocimiento en bases de datos relacionales y no relacionales." 
              },
              { 
                icon: <Globe size={24} />, 
                title: "Tecnologías Web", 
                desc: "Desarrollo con frameworks modernos y mejores prácticas." 
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/40 transition-all duration-300 shadow-md hover:shadow-lg flex items-start gap-4"
              >
                <div className="p-3 bg-white/60 rounded-xl text-slate-800 group-hover:scale-110 transition-transform shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-700 text-sm leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
