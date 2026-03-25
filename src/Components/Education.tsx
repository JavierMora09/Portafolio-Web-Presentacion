import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="educacion" className="py-20 px-6">
      <div className="max-w-6xl mx-auto"> {/* Ajustado a max-w-6xl para ser consistente con About y Skills */}
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Educación
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            Formación académica y aprendizaje continuo enfocado en el desarrollo de software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Carrera */}
          <div className="lg:col-span-7 bg-white/30 backdrop-blur-md border border-white/50 rounded-[2rem] p-8 md:p-10 shadow-xl transition-all hover:bg-white/40 duration-500 flex flex-col justify-center">
            <div className="flex items-start gap-5 mb-6">
              <div className="p-3.5 bg-slate-900 rounded-2xl shadow-lg transform -rotate-3 transition-transform hover:rotate-0 duration-300">
                <GraduationCap className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1 leading-tight">
                  Ingeniería de Sistemas e Informática
                </h3>
                <p className="text-slate-800 font-medium bg-white/40 inline-block px-2 py-0.5 rounded-md mb-2 shadow-sm">
                  Universidad Pontificia Bolivariana - Seccional Bucaramanga
                </p>
                <p className="text-slate-600 text-sm font-medium flex items-center gap-2">
                   2018 — 2026
                </p>
              </div>
            </div>

            <p className="text-slate-800 leading-relaxed text-lg">
              Formación orientada al desarrollo de software, bases de datos y arquitectura
              de sistemas, aplicando conocimientos en proyectos académicos y personales para resolver problemas complejos.
            </p>
          </div>

          {/* Cursos / Certificaciones */}
          <div className="lg:col-span-5 bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-8 md:p-10 shadow-lg transition-all hover:bg-white/30 duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/70 rounded-xl shadow-sm text-slate-900">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Certificaciones
              </h3>
            </div>

            {/* Lista con un sutil timeline visual */}
            <ul className="space-y-6 relative before:absolute before:inset-y-0 before:left-[7px] before:w-[2px] before:bg-white/50">
              {[
                { name: "Desarrollo Web Full Stack", provider: "Plataforma online" },
                { name: "Bases de Datos Avanzadas", provider: "Institución / Curso" },
                { name: "Arquitectura de Software", provider: "Curso online" }
              ].map((course, index) => (
                <li key={index} className="relative pl-6">
                  {/* El punto del timeline */}
                  <span className="absolute left-0 top-2 w-4 h-4 bg-slate-900 rounded-full border-[3px] border-white shadow-sm"></span>
                  <p className="font-bold text-slate-900 text-lg">
                    {course.name}
                  </p>
                  <span className="text-sm font-medium text-slate-600">
                    {course.provider}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}