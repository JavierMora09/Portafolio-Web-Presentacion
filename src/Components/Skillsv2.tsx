
export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      gridClass: 'md:col-span-7 md:row-span-2',
      skills: [
        { name: 'React', icon: 'react.svg' },
        { name: 'TypeScript', icon: 'typescript.svg' },
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'Tailwind CSS', icon: 'tailwind.svg' }
      ]
    },
    {
      title: 'Backend',
      // Ahora ocupa 5 columnas de ancho y 2 de alto
      gridClass: 'md:col-span-5 md:row-span-2',
      skills: [
        { name: 'Node.js', icon: 'node.svg' },
        { name: 'Python', icon: 'python.svg' },
        { name: 'Express', icon: 'express.svg' }
      ]
    },
    {
      title: 'Bases de Datos',
      gridClass: 'md:col-span-4 md:row-span-2',
      skills: [
        { name: 'PostgreSQL', icon: 'postgresql.svg' },
        { name: 'MongoDB', icon: 'mongodb.svg' }
      ]
    },
    {
      title: 'Herramientas',
      gridClass: 'md:col-span-3 md:row-span-2',
      skills: [
        { name: 'Git', icon: 'git.svg' },
        { name: 'Docker', icon: 'docker.svg' }
      ]
    },
    {
      title: 'Diseño & Edición',
      // Esta es la nueva columna que queda bajo Backend
      gridClass: 'md:col-span-5 md:row-span-2',
      skills: [
        { name: 'Photoshop', icon: 'photoshop.svg' },
        { name: 'Premiere', icon: 'premiere.svg' },
        { name: 'After Effects', icon: 'aftereffects.svg' },
        { name: 'Figma', icon: 'figma.svg' }
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">
          Tecnologías que utilizo
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Tecnologías y herramientas con las que he trabajado en proyectos académicos y personales.
        </p>

        {/* Definimos 4 filas para que quepa la nueva sección abajo */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-4 gap-4 auto-rows-[150px]">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`${category.gridClass} bg-white/30 backdrop-blur-md p-6 rounded-3xl border border-white/40 shadow-lg flex flex-col hover:border-white/80 transition-all group`}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-slate-800 rounded-full"></span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-white/50 rounded-xl border border-white/60 hover:bg-white transition-all shadow-sm"
                  >
                    <img
                      src={`/icons/${skill.icon}`}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    <span className="text-xs font-bold text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}