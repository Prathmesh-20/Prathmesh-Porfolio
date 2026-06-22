import { Routes, Route } from "react-router-dom";

import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";

import Home from "./pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Links from "./pages/Links";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;