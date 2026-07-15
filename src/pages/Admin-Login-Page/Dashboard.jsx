import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logout = () => {
    localStorage.removeItem("isAdmin");
    setMobileMenuOpen(false);
    navigate("/admin");
  };

  const menu = [
    { title: "Edit Home", icon: <FaHome />, path: "/dashboard/home" },
    { title: "Edit About", icon: <FaUser />, path: "/dashboard/about" },
    { title: "Edit Projects", icon: <FaProjectDiagram />, path: "/dashboard/projects" },
    { title: "Edit Skills", icon: <FaTools />, path: "/dashboard/skills" },
    { title: "Edit Contact", icon: <FaEnvelope />, path: "/dashboard/contact" },
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-slate-950/70 md:hidden" onClick={closeMenu} />
      )}

      <div className="flex min-h-screen flex-col md:flex-row">
        <aside
          className={`fixed inset-y-0 left-0 z-40 flex h-screen w-72 flex-col border-r border-cyan-500/30 bg-slate-900/95 backdrop-blur-xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:h-screen md:w-auto md:translate-x-0 md:transition-none ${
            open ? "md:w-64" : "md:w-20"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-800 p-4 sm:p-5">
            {(open || isMobile) && (
              <div className="flex items-center gap-3">
                <FaUserShield className="text-2xl text-cyan-400" />
                <span className="text-lg font-semibold text-cyan-400">Admin Panel</span>
              </div>
            )}
            <button
              onClick={() => {
                if (isMobile) {
                  setMobileMenuOpen(false);
                } else {
                  setOpen(!open);
                }
              }}
              className="rounded-lg p-2 text-cyan-400 transition hover:bg-cyan-500/10"
            >
              {isMobile || !open ? <FaBars /> : <FaTimes />}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-2 sm:py-4">
            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive: navActive }) => `flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-all sm:gap-4 sm:px-6 sm:py-4 sm:text-base ${
                  navActive || isActive(item.path)
                    ? "bg-cyan-500/15 text-cyan-300"
                    : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-200"
                }`}
              >
                <span className="shrink-0 text-lg sm:text-xl">{item.icon}</span>
                {(open || isMobile) && <span className="font-medium">{item.title}</span>}
              </NavLink>
            ))}
          </div>

          <div className="border-t border-slate-800 p-3 sm:p-4">
            <button
              onClick={logout}
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-red-500/90 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              <FaSignOutAlt />
              {(open || isMobile) && "Logout"}
            </button>
          </div>
        </aside>

        <main className="flex-1 min-w-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.1),_transparent_35%)] p-4 sm:p-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-lg shadow-cyan-500/10 sm:px-5">
              <div className="min-w-0">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">Dashboard</h2>
                <p className="text-sm text-slate-400">Edit your portfolio content and preview it instantly.</p>
              </div>

              {isMobile && (
                <button
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="rounded-lg p-2 text-cyan-400 transition hover:bg-cyan-500/10 md:hidden"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              )}
            </div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
