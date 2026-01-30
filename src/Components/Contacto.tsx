import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-800 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-lime-400 mb-8 tracking-[5px]">
        CONTACTO
      </h2>
      <p className="text-gray-300 mb-6">
        ¿Te gustaría colaborar o hablar sobre una oportunidad laboral?
      </p>
      <a
        href="mailto:francisco.mora09@hotmail.com"
        className="bg-lime-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-lime-400 transition"
      >
        Envíame un correo
      </a>

      <div className="flex justify-center gap-6 mt-8 text-2xl">
        <a
          href="https://linkedin.com"
          target="_blank"
          className="hover:text-lime-400"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="hover:text-lime-400"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
