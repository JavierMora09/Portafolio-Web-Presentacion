import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-neutral-900 text-center text-gray-400 text-sm border-t border-neutral-700">
      © {new Date().getFullYear()} Francisco Mora — Todos los derechos
      reservados.
    </footer>
  );
};

export default Footer;
