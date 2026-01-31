import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Proyectos";
import Contact from "./Components/Contacto";
import Skillsv2 from "./Components/Skillsv2";
import Herov2 from "./Components/Herov2";
import Sobremi from "./Components/Sobremi";
import "./App.css";
import Proyectosv2 from "./Components/Proyectosv2";

// App.tsx
function App() {
  return (
    /* Añadimos min-h-screen para que ocupe todo el alto y el degradado */
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 via-slate-400 to-slate-300">
      <Header />
      <main>
        <Herov2 />
        <Sobremi />
        <Skillsv2 />
        <Proyectosv2 />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;
