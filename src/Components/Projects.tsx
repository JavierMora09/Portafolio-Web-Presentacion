import { ExternalLink, Github, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
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
      demo: '#',
      image: null
    },
    {
      title: 'Plataforma de Aprendizaje',
      description: 'Sistema de e-learning con cursos, evaluaciones y seguimiento de progreso.',
      technologies: ['TypeScript', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
      image: null
    },
    {
      title: 'API de Servicios',
      description: 'API RESTful escalable para servicios de terceros con autenticación y documentación.',
      technologies: ['Python', 'FastAPI', 'Docker'],
      github: '#',
      demo: '#',
      image: null
    },
    {
      title: 'E-commerce Reactivo',
      description: 'Tienda en línea con carrito de compras, pasarela de pagos y panel de usuario.',
      technologies: ['React', 'Tailwind', 'Stripe'],
      github: '#',
      demo: '#',
      image: null
    }
  ];

  return (
    <section id="proyectos" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Proyectos Destacados
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            Explora algunos de los desarrollos más recientes en los que he trabajado.
          </p>
        </div>

        {/* Contenedor del Carrusel */}
        <div className="relative group flex items-center justify-center overflow-visible px-4 md:px-8"> 
          
          {/* Botón Izquierdo Personalizado */}
          <button 
            className="swiper-button-prev-custom absolute left-0 z-10 p-3.5 bg-white/70 backdrop-blur-md rounded-full shadow-lg hover:bg-slate-900 hover:text-white hover:scale-110 transition-all duration-300 text-slate-800 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center cursor-pointer"
            aria-label="Anterior proyecto"
          >
            <ChevronLeft size={28} />
          </button>
          
          {/* El Carrusel (Swiper) */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 w-full px-2"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="h-auto"> 
                {/* Tarjeta del Proyecto con Glassmorphism */}
                <div className="bg-white/30 backdrop-blur-md border border-white/50 rounded-[2rem] p-7 h-full flex flex-col shadow-lg hover:shadow-xl hover:bg-white/40 hover:-translate-y-1 transition-all duration-300 group/card">
                  
                  {/* Placeholder de Imagen */}
                  <div className="w-full h-48 bg-slate-100/50 rounded-2xl mb-6 overflow-hidden relative flex items-center justify-center border border-white/60 group-hover:border-slate-300 transition-colors shadow-inner">
                    {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="flex flex-col items-center gap-2 text-slate-400 group-hover:text-slate-500 transition-colors">
                            <ImageIcon size={32} />
                            <span className="text-xs font-bold uppercase tracking-widest">En desarrollo</span>
                        </div>
                    )}
                  </div>
                  
                  {/* Contenido del Proyecto */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">{project.title}</h3>
                  <p className="text-slate-700 mb-6 text-sm leading-relaxed flex-grow">{project.description}</p>
                  
                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/60 text-slate-800 border border-white/60 rounded-full text-xs font-bold shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Botones de Acción (Código y Demo) */}
                  <div className="flex gap-4 border-t border-slate-200/50 pt-5 mt-auto">
                    <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/60 hover:bg-slate-900 hover:text-white text-slate-800 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm border border-white/60 hover:border-slate-900">
                      <Github size={18} /> Código
                    </a>
                    <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm transition-all duration-300 shadow-md transform hover:-translate-y-0.5">
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botón Derecho Personalizado */}
          <button 
            className="swiper-button-next-custom absolute right-0 z-10 p-3.5 bg-white/70 backdrop-blur-md rounded-full shadow-lg hover:bg-slate-900 hover:text-white hover:scale-110 transition-all duration-300 text-slate-800 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center cursor-pointer"
            aria-label="Siguiente proyecto"
          >
            <ChevronRight size={28} />
          </button>

        </div>
      </div>

      {/* Estilos para los puntitos de paginación del carrusel */}
      <style>{`
        .swiper-pagination-bullet { 
          background: #64748b !important; 
          opacity: 0.5; 
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active { 
          background: #0f172a !important; 
          width: 28px !important; 
          border-radius: 8px !important; 
          opacity: 1; 
        }
      `}</style>
    </section>
  );
}