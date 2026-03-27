"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectData {
  title: string;
  description: string;
  techStack: string[]; 
  src: string;
  githubUrl?: string;
  demoUrl?: string;
}

interface Colors {
  title?: string;
  description?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface CircularProjectsProps {
  projects: ProjectData[];
  autoplay?: boolean;
  colors?: Colors;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularProjects = ({
  projects,
  autoplay = true,
  colors = {},
}: CircularProjectsProps) => {
  const colorTitle = colors.title ?? "#0f172a";
  const colorDesc = colors.description ?? "#475569";
  const colorArrowBg = colors.arrowBackground ?? "rgba(255, 255, 255, 0.5)";
  const colorArrowFg = colors.arrowForeground ?? "#0f172a";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "rgba(255, 255, 255, 0.8)";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null); 

  const projectsLength = useMemo(() => projects.length, [projects]);
  const activeProject = useMemo(() => projects[activeIndex], [activeIndex, projects]);

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[]);

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projectsLength);
      }, 6000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  },[autoplay, projectsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [projectsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsLength) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [projectsLength]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + projectsLength) % projectsLength === index;
    const isRight = (activeIndex + 1) % projectsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const textVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        
        {/* Contenedor de Imágenes */}
        <div 
          className="relative w-full h-80 md:h-96" 
          style={{ perspective: "1000px" }} 
          ref={imageContainerRef}
        >
          {projects.map((project, index) => (
            <img
              key={project.src}
              src={project.src}
              alt={project.title}
              className="absolute w-full h-full object-cover rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-2 border-white/20"
              style={getImageStyle(index)}
            />
          ))}
        </div>

        {/* Contenedor de Contenido (Glassmorphism) */}
        <div className="flex flex-col h-full min-h-[420px] bg-white/30 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/50 shadow-lg transition-all duration-300">
          
          {/* ENCABEZADO: Título a la izquierda, Controles a la derecha */}
          <div className="flex justify-between items-start gap-4 mb-4">
            
            {/* Título envuelto para que ocupe todo el espacio disponible y no cause saltos */}
            <div className="flex-1 min-h-[40px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${activeIndex}`}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-6 md:h-8 bg-slate-800 rounded-full shadow-sm shrink-0"></span>
                  <h3
                    className="text-2xl sm:text-3xl font-bold tracking-tight line-clamp-2"
                    style={{ color: colorTitle }}
                  >
                    {activeProject.title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Flechas de Navegación (Ahora respetan el espacio y empujan el texto) */}
            <div className="flex gap-2 shrink-0 z-10 pt-1">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/60 shadow-sm transition-all duration-300 backdrop-blur-sm hover:scale-105"
                style={{ backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg }}
                onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}
              >
                <FaArrowLeft size={14} color={colorArrowFg} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/60 shadow-sm transition-all duration-300 backdrop-blur-sm hover:scale-105"
                style={{ backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg }}
                onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}
              >
                <FaArrowRight size={14} color={colorArrowFg} />
              </button>
            </div>
            
          </div>

          {/* CUERPO: Descripción, Tags y Botones Inferiores */}
          <div className="flex flex-col flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`body-${activeIndex}`}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col h-full"
              >
                {/* Descripción animada por palabras */}
                <motion.p
                  className="text-base md:text-lg leading-relaxed mb-6"
                  style={{ color: colorDesc }}
                >
                  {activeProject.description.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ filter: "blur(5px)", opacity: 0, y: 2 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut", delay: 0.015 * i }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>

                {/* Contenedor inferior: Tags y Botones (El mt-auto los empuja abajo siempre) */}
                <div className="mt-auto pt-2">
                  {/* Etiquetas de Tecnologías (Píldoras) */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 bg-white/50 rounded-xl border border-white/60 hover:bg-white hover:border-slate-300 transition-all duration-300  cursor-default text-sm font-semibold text-slate-800 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Separador sutil */}
                  <hr className="border-slate-300/40 my-4" />

                  {/* Botones Código / Demo */}
                  <div className="flex gap-3 sm:gap-4">
                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 g-white/60 hover:bg-slate-900 hover:text-white text-slate-800 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm border border-white/60 hover:border-slate-900"
                      >
                        <Github size={18} />
                        Código
                      </a>
                    )}
                    {activeProject.demoUrl && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#0f172a] text-white rounded-xl font-semibold hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-md text-sm sm:text-base"
                      >
                        <ExternalLink size={18} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
};