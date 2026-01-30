import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Proyectos";
import Contact from "./Components/Contacto";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
