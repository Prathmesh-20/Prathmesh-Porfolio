import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
// import Links from "./pages/Links";

import AdminLogin from "./pages/Admin-Login-Page/AdminLogin";
import Dashboard from "./pages/Admin-Login-Page/Dashboard";

function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/admin" ||
    location.pathname === "/dashboard";

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">

      {!hideNavbar && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/links" element={<Links />} /> */}

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      {!hideNavbar && <Footer />}
    </div>
  );
}

export default App;