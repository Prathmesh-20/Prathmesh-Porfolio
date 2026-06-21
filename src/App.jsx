import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FindMeOnline from "./components/FindMeOnline";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <FindMeOnline />
      </main>

      <Footer />
    </div>
  );
}

export default App;