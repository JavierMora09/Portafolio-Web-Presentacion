import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  return (
    <section
      id="educacion"
      className="py-20 px-6"
    >
      <div className="max-w-5xl mx-auto ">
        
        {/* Título */}
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          Educación
        </h2>

        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Formación académica y aprendizaje continuo enfocado en el desarrollo de software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Carrera */}
          <div className="md:col-span-7 bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-slate-800 rounded-2xl shadow-lg">
                <GraduationCap className="text-white" size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Ingeniería de Sistemas e Informática
                </h3>
                <p className="text-slate-700">
                  Universidad pontificia Bolivariana - Seccional Bucaramanga
                </p>
                <p className="text-slate-600 text-sm mt-1">
                  [2018] – [2026]
                </p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Formación orientada al desarrollo de software, bases de datos y arquitectura
              de sistemas, aplicando conocimientos en proyectos académicos y personales.
            </p>
          </div>

          {/* Cursos / Certificaciones */}
          <div className="md:col-span-5 bg-white/25 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/60 rounded-xl shadow-inner">
                <Award className="text-slate-800" size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Cursos & Certificaciones
              </h3>
            </div>

            <ul className="space-y-4">
              <li>
                <p className="font-medium text-slate-800">
                  Desarrollo Web Full Stack
                </p>
                <span className="text-sm text-slate-600">
                  Plataforma online
                </span>
              </li>
              <li>
                <p className="font-medium text-slate-800">
                  Bases de Datos Avanzadas
                </p>
                <span className="text-sm text-slate-600">
                  Institución / Curso
                </span>
              </li>
              <li>
                <p className="font-medium text-slate-800">
                  Arquitectura de Software
                </p>
                <span className="text-sm text-slate-600">
                  Curso online
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
