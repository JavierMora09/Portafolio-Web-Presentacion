export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: 'react.svg' },
        { name: 'TypeScript', icon: 'typescript.svg' },
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'Tailwind CSS', icon: 'tailwind.svg' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'node.svg' },
        { name: 'Python', icon: 'python.svg' },
        { name: 'Express', icon: 'express.svg' }
      ]
    },
    {
      title: 'Bases de Datos',
      skills: [
        { name: 'PostgreSQL', icon: 'postgresql.svg' },
        { name: 'MongoDB', icon: 'mongodb.svg' }
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', icon: 'git.svg' },
        { name: 'Docker', icon: 'docker.svg' }
      ]
    },
    {
      title: 'Diseño & Edición',
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
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center tracking-tight">
          Tecnologías que utilizo
        </h2>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-16 text-lg">
          Herramientas con las que construyo soluciones eficientes y escalables.
        </p>

        {/* Uso de un grid más fluido en lugar de un grid-cols-12 rígido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/30 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-lg flex flex-col transition-all duration-300 hover:bg-white/40 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                <span className="w-2 h-6 bg-slate-800 rounded-full shadow-sm"></span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-white/50 rounded-xl border border-white/60 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-sm cursor-default"
                  >
                    <img
                      src={`/icons/${skill.icon}`}
                      alt={`Icono de ${skill.name}`}
                      className="w-5 h-5 object-contain drop-shadow-sm"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        // Si falla la imagen, aseguramos que el texto mantenga su margen
                        e.currentTarget.parentElement?.classList.add('pl-1');
                      }}
                    />
                    <span className="text-sm font-semibold text-slate-800">{skill.name}</span>
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