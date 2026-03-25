import { Code, Database, Globe, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center tracking-tight">
          Sobre Mí
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Tarjeta Principal: Biografía (Manteniendo tu diseño original de cristal) */}
          <div className="lg:col-span-7 bg-white/30 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/50 shadow-xl flex flex-col justify-center transition-all hover:bg-white/40 duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-slate-900 rounded-2xl shadow-lg transform -rotate-3 transition-transform hover:rotate-0 duration-300">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Mi Perfil</h3>
            </div>

            <div className="space-y-6 text-slate-800 text-lg leading-relaxed">
              <p>
                Soy un estudiante apasionado de <strong className="text-slate-950 font-bold bg-white/50 px-2 py-0.5 rounded-md shadow-sm">Ingeniería de Sistemas e Informática</strong>,
                próximo a graduarme. Mi enfoque está en el desarrollo de software
                y la implementación de soluciones tecnológicas que generen un impacto positivo.
              </p>
              <p>
                Durante mi formación académica he trabajado en proyectos donde he aplicado
                desarrollo web, bases de datos y arquitectura de software para resolver
                problemas reales.
              </p>
              {/* Cita destacada para mejor lectura escaneable */}
              <blockquote className="border-l-4 border-slate-900 pl-5 italic text-slate-800 bg-white/30 py-4 pr-4 rounded-r-xl font-medium shadow-sm">
                "Busco constantemente mejorar mis habilidades y contribuir con proyectos significativos que desafíen mi capacidad técnica."
              </blockquote>
            </div>
          </div>

          {/* Columna de Tarjetas Secundarias */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5">

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
                className="group bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/40 hover:bg-white/40 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-start gap-5 cursor-default"
              >
                {/* Animación en el icono al hacer hover en la tarjeta */}
                <div className="p-3.5 bg-white/70 rounded-xl text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
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