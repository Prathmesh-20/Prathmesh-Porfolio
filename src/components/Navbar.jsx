import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-900/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold text-cyan-400">
          Prathmesh
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition hover:text-cyan-400">
                {link.label}
              </Link>
            ))}

            <Link
              to="/admin"
              className="text-cyan-400 transition duration-300 hover:text-cyan-300"
              title="Admin Login"
            >
              <RiAdminFill size={28} />
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-2xl text-cyan-400 transition hover:bg-cyan-500/10 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-slate-950/70 md:hidden" onClick={closeMenu} />

          <div className="absolute left-0 right-0 top-full z-50 border-t border-slate-800 bg-slate-900 px-4 pb-5 pt-3 shadow-2xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/admin"
                onClick={closeMenu}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/10"
              >
                <RiAdminFill size={18} />
                <span>Admin</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
