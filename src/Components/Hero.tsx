import React from "react";
import profilePic from "../assets/images/foto mia.webp"; // reemplaza con tu foto

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="  flex flex-col md:flex-row items-center justify-center gap-10 pt-50 pb-20 px-6  bg-neutral-800"
    >
      <img
        src={profilePic}
        alt="Foto de Francisco Mora"
        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg border-4 border-lime-600"
      />
      <div className="max-w-lg text-center md:text-left text-balance">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-lime-400 ">
          FRANCISCO JAVIER <br />
        </h1>
        <h1 className="text-3xl md:text-5xl md font-extrabold  text-white mb-4  ">
          {" "}
          MORA SERRANO
        </h1>
        <p className="text-gray-300 text-sm md:text-base ml-0 mb-4 mr-2.5 md:ml-2">
          Desarrollador{" "}
          <span className="text-lime-400 font-semibold text-lg ">
            Full-Stack / Front-End
          </span>{" "}
          con una sólida base en el diseño de experiencia de usuario. Desde el
          wireframe y la investigación, hasta la entrega de código limpio y
          responsivo, me aseguro de que cada proyecto esté diseñado pensando
          siempre en el usuario final
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-lime-500 px-5 py-2 rounded-lg text-black font-semibold hover:bg-lime-400 transition"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className=" text-white border border-lime-500 px-5 py-2 rounded-lg hover:bg-lime-500 hover:text-black transition"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
