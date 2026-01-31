import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-10 ">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-5">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-4xl font-bold text-gray-700">
            TN
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-950 mb-4">
          Francisco Javier Mora Serrano
        </h1>

        <h2 className="text-2xl md:text-3xl text-white mb-6">
          Ingeniero de Sistemas e Informática
        </h2>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Próximo a graduarme con pasión por el desarrollo de software,
          la resolución de problemas y la creación de soluciones tecnológicas innovadoras.
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <a
            href="mailto:francisco.mora09@hotmail.com"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <Mail size={20} />
            Contáctame
          </a>
          <a
            href="#"
            className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            <FileText size={20} />
            Ver CV
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/JavierMora09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

