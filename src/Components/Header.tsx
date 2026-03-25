import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Sobre Mí', id: 'sobre-mi' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Educación', id: 'educacion' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <header className="fixed top-2 left-0 right-0 z-50">
      <nav className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm">
          
          {/* Logo / Nombre */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="text-lg font-bold text-slate-900 tracking-tight focus:outline-none focus:ring-2 focus:ring-slate-900 rounded"
            aria-label="Ir al inicio"
          >
            Francisco.dev
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="relative text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium group focus:outline-none focus:ring-2 focus:ring-slate-900 rounded px-1"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-800 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 px-4 py-4 bg-white/90 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg flex flex-col gap-2">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="w-full text-left px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors font-medium active:bg-slate-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}