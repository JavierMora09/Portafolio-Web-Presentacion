
import { CircularProjects } from "./ui/circular-projects";

export default function ProjectsSection() {
  const projectsData =[
    {
      title: "E-Commerce Dashboard",
      techStack: ["React", "TypeScript", "Tailwind CSS"], // Cambiado a array
      description:
        "Plataforma completa para la gestión de ventas e inventario en tiempo real. Construí soluciones escalables que mejoran la eficiencia operativa.",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1368&auto=format&fit=crop",
      githubUrl: "https://github.com/tu-usuario/repo1",
      demoUrl: "https://tu-demo1.com",
    },
    {
      title: "App de Gestión Financiera",
      techStack: ["TypeScript", "Express", "MongoDB"], // Justo como en tu imagen
      description:
        "Aplicación web que permite a los usuarios rastrear sus gastos diarios. Implementé gráficos interactivos y un sistema de autenticación seguro.",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      githubUrl: "https://github.com/tu-usuario/repo2",
      demoUrl: "https://tu-demo2.com",
    },
    {
      title: "Plataforma de Streaming",
      techStack:["Next.js", "Prisma", "PostgreSQL"],
      description:
        "Clon funcional de una plataforma de video bajo demanda. Integración de pagos, gestión de perfiles de usuario y video optimizado.",
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1374&auto=format&fit=crop",
      githubUrl: "https://github.com/tu-usuario/repo3",
      demoUrl: "https://tu-demo2.com",
      // En este ejemplo, si no pones demoUrl, simplemente no renderizará el botón de Demo.
    },
  ];

  return (
    <section id="proyectos" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center tracking-tight">
          Mis Proyectos
        </h2>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-16 text-lg">
          Una selección de mis trabajos más recientes construidos con tecnologías modernas.
        </p>

        <CircularProjects projects={projectsData} autoplay={true} />
      </div>
    </section>
  );
}