import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaFilePdf } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400"
        >
          Prathmesh
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">

          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-cyan-400 transition">
            About
          </Link>

          <Link to="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>

          <Link to="/skills" className="hover:text-cyan-400 transition">
            Skills
          </Link>

          <Link to="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>

          <Link to="/links" className="hover:text-cyan-400 transition">
            Links
          </Link>

          {/* Resume Button */}
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
          >
            <FaFilePdf />
            Resume
          </a> */}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-6 pb-6 space-y-4">

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            About
          </Link>

          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            Projects
          </Link>

          <Link
            to="/skills"
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            Skills
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            Contact
          </Link>

          <Link
            to="/links"
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            Links
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;