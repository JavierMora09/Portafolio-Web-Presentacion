import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-10 bg-lime-500 text-white shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="font-bold text-xl tracking-wide">Francisco.dev</h1>
        <ul className="flex gap-6 text-sm md:text-base">
          <li>
            <a href="#about" className="hover:text-black">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-black">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-black">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
