import React from "react";
import js from "../assets/icons/JS ICONS.png";
import react from "../assets/icons/React-icon.svg";
import node from "../assets/icons/nodejs_logo_icon_169910.svg";
import typescript from "../assets/icons/typescript-def.svg";

const skills = [
  { name: "JavaScript", icon: js },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: react },
  { name: "Node.js", icon: node },
  // agrega más según tu imagen
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-neutral-800 text-center">
      <h2 className="text-2xl  md:text-3xl font-bold text-lime-400 mb-8  tracking-[10px] ">
        HABILIDADES TÉCNICAS
      </h2>
      <div className=" justify-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className=" flex flex-col items-center gap-2 hover:scale-110 transition"
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
            <p className="text-sm text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
