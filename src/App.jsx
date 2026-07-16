import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import AdminLogin, { ProtectedRoute } from "./pages/Admin-Login-Page/AdminLogin";
import Dashboard from "./pages/Admin-Login-Page/Dashboard";
import HomeEditor from "./pages/Admin-Login-Page/HomeEditor";
import AboutEditor from "./pages/Admin-Login-Page/AboutEditor";
import ProjectsEditor from "./pages/Admin-Login-Page/ProjectsEditor";
import SkillsEditor from "./pages/Admin-Login-Page/SkillsEditor";
import ContactEditor from "./pages/Admin-Login-Page/ContactEditor";

function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/dashboard");

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

          <Route path="/admin" element={<AdminLogin />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomeEditor />} />
            <Route path="home" element={<HomeEditor />} />
            <Route path="about" element={<AboutEditor />} />
            <Route path="projects" element={<ProjectsEditor />} />
            <Route path="skills" element={<SkillsEditor />} />
            <Route path="contact" element={<ContactEditor />} />
          </Route>
        </Routes>
      </main>

      {!hideNavbar && <Footer />}
    </div>
  );
}

export default App;

