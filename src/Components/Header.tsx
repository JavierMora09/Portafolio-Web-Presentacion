import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
          >
            Tu Nombre
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('sobre-mi')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Sobre Mí
            </button>
            <button onClick={() => scrollToSection('habilidades')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Habilidades
            </button>
            <button onClick={() => scrollToSection('proyectos')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Proyectos
            </button>
            <button onClick={() => scrollToSection('educacion')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Educación
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Contacto
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button onClick={() => scrollToSection('sobre-mi')} className="text-gray-700 hover:text-gray-900 transition-colors text-left">
              Sobre Mí
            </button>
            <button onClick={() => scrollToSection('habilidades')} className="text-gray-700 hover:text-gray-900 transition-colors text-left">
              Habilidades
            </button>
            <button onClick={() => scrollToSection('proyectos')} className="text-gray-700 hover:text-gray-900 transition-colors text-left">
              Proyectos
            </button>
            <button onClick={() => scrollToSection('educacion')} className="text-gray-700 hover:text-gray-900 transition-colors text-left">
              Educación
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-gray-900 transition-colors text-left">
              Contacto
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
