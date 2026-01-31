import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contacto";
import Skillsv2 from "./Components/Skillsv2";
import Herov2 from "./Components/Herov2";
import AboutMe from "./Components/AboutMe";
import "./App.css";
import Projects from "./Components/Projects";
import Education from "./Components/Education";

// App.tsx
function App() {
  return (
    /* Añadimos min-h-screen para que ocupe todo el alto y el degradado */
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 via-slate-400 to-slate-300">
      <Header />
      <main>
        <section>
          <Herov2 />
        </section>

        <section>
          <AboutMe />
        </section>

        <section>
          <Skillsv2 />
        </section>

        <section>
          <Projects/>
        </section>

        <section>
          <Education />
        </section>

        <section>
          <Contact />
        </section>
        
      </main>
      <Footer />
    </div>
  );
}


export default App;
