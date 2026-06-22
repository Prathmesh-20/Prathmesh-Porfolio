import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-slate-900 sticky top-0 z-50">
      {/* Change Name Here */}
      <h1 className="text-2xl font-bold text-cyan-400"></h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/about" className="hover:text-cyan-400">About</Link>
        <Link to="/projects" className="hover:text-cyan-400">Projects</Link>
        <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
        <Link to="/links" className="hover:text-cyan-400">Links</Link>
      </div>
    </nav>
  );
};

export default Navbar;