import React from "react";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-sm text-center md:text-left">
          <p className="text-slate-300 font-medium mb-1">¿Listo para colaborar?</p>
          <a href="mailto:francisco.mora09@hotmail.com" className="hover:text-white transition-colors">
            francisco.mora09@hotmail.com
          </a>
        </div>

        <div className="text-sm text-center">
          © {new Date().getFullYear()} Francisco Mora.<br className="md:hidden" /> Todos los derechos reservados.
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Volver al inicio"
        >
          <ArrowUp size={20} />
        </button>
        
      </div>
    </footer>
  );
};

export default Footer;