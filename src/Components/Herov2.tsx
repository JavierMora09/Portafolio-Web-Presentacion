import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-5">
          {/* Corregido a FM (Francisco Mora) y mejorado el contraste */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
            FM
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Francisco Javier Mora Serrano
        </h1>

        {/* Cuidado con el text-white en fondos claros. Cambiado a un color de acento para jerarquía */}
        <h2 className="text-2xl md:text-3xl font-medium text-indigo-600 mb-6">
          Ingeniero de Sistemas e Informática
        </h2>

        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Próximo a graduarme con pasión por el desarrollo de software,
          la resolución de problemas y la creación de soluciones tecnológicas innovadoras.
        </p>

        {/* Botones con mejor feedback visual (transform) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="mailto:francisco.mora09@hotmail.com"
            className="px-8 py-3.5 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <Mail size={20} />
            Contáctame
          </a>
          <a
            href="/CV_Francisco_Mora_Ingeniero_Sistemas.pdf" // El nombre exacto de tu archivo en public/
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-slate-900 text-slate-900 font-medium rounded-xl hover:bg-slate-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            <FileText size={20} />
            Ver CV
          </a>
        </div>

        {/* Enlaces sociales con aria-labels */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/JavierMora09"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
            aria-label="Perfil de GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-[#0A66C2] hover:bg-slate-100 rounded-full transition-all"
            aria-label="Perfil de LinkedIn"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}