import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'Sobre Mí', id: 'sobre-mi' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Educación', id: 'educacion' },
    { label: 'Contacto', id: 'contacto' },
  ]

  return (
    <header className="fixed top-2 left-0 right-0 z-50">
      <nav className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between px-6 py-4 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg">
          
          {/* Logo / Nombre */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg font-bold text-slate-900 tracking-tight"
          >
            Francisco.dev
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-800 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-800"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 px-6 py-4 bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg flex flex-col gap-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-slate-700 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
