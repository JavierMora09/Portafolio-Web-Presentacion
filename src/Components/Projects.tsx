import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Projects() {
  const projects = [
    
    {
      title: 'Sistema de Gestión',
      description: 'Aplicación web para gestionar inventarios y ventas con panel administrativo completo.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
        title: 'Plataforma de Aprendizaje',
        description: 'Sistema de e-learning con cursos, evaluaciones y seguimiento de progreso.',
        technologies: ['TypeScript', 'Express', 'MongoDB'],
        github: '#',
        demo: '#'
    },
    {
        title: 'API de Servicios',
        description: 'API RESTful escalable para servicios de terceros con autenticación y documentación.',
        technologies: ['Python', 'FastAPI', 'Docker'],
        github: '#',
        demo: '#'
    },
    {
        title: 'API de Servicios',
        description: 'API RESTful escalable para servicios de terceros con autenticación y documentación.',
        technologies: ['Python', 'FastAPI', 'Docker'],
        github: '#',
        demo: '#'
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-12 text-center">
          Proyectos Destacados
        </h2>

        {/* CLAVE: Añadir 'items-center' y 'overflow-visible' para centrar las flechas */}
        <div className="relative group flex items-center overflow-visible"> 
          
          {/* Botón Izquierdo: Posicionado a la izquierda y centrado verticalmente */}
          <button className="swiper-button-prev-custom absolute left-[-20px] z-10 p-3 bg-white/50 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all text-slate-800 opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronLeft size={24} />
          </button>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14 w-full"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-6 h-full flex flex-col shadow-xl hover:bg-white/40 transition-all group/card">
                  <div className="w-full h-48 bg-slate-800/20 rounded-2xl mb-6 overflow-hidden relative">
                     <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-xs">
                        Preview Proyecto
                     </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-800 mb-6 text-sm leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/50 text-slate-700 border border-white/60 rounded-full text-xs font-bold">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-6 border-t border-white/20 pt-4">
                    <a href={project.github} className="flex items-center gap-2 text-slate-800 hover:text-black font-bold text-sm transition-colors">
                      <Github size={18} /> Código
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 text-slate-800 hover:text-black font-bold text-sm transition-colors">
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botón Derecho: Posicionado a la derecha y centrado verticalmente */}
          <button className="swiper-button-next-custom absolute right-[-20px] z-10 p-3 bg-white/50 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all text-slate-800 opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <style>{`
        .swiper-pagination-bullet { background: #1e293b !important; }
        .swiper-pagination-bullet-active { width: 20px !important; border-radius: 5px !important; }
      `}</style>
    </section>
  );
}
