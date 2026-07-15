import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
  FaLink,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const logout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  const menu = [
    { title: "Edit Home", icon: <FaHome />, path: "/dashboard/home" },
    { title: "Edit About", icon: <FaUser />, path: "/dashboard/about" },
    { title: "Edit Projects", icon: <FaProjectDiagram />, path: "/dashboard/projects" },
    { title: "Edit Skills", icon: <FaTools />, path: "/dashboard/skills" },
    { title: "Edit Contact", icon: <FaEnvelope />, path: "/dashboard/contact" },
    { title: "Edit Links", icon: <FaLink />, path: "/dashboard/links" },
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <aside className={`${open ? "w-64" : "w-20"} flex min-h-screen flex-col border-r border-cyan-500/30 bg-slate-900/95 backdrop-blur-xl transition-all duration-300`}>
        <div className="flex items-center justify-between border-b border-slate-800 p-5">
          {open && (
            <div className="flex items-center gap-3">
              <FaUserShield className="text-2xl text-cyan-400" />
              <span className="text-lg font-semibold text-cyan-400">Admin Panel</span>
            </div>
          )}
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-cyan-400 transition hover:bg-cyan-500/10">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="flex-1 py-4">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive: navActive }) => `flex w-full items-center gap-4 px-6 py-4 text-left transition-all ${navActive || isActive(item.path) ? "bg-cyan-500/15 text-cyan-300" : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-200"}`}
            >
              <span className="text-xl">{item.icon}</span>
              {open && <span className="font-medium">{item.title}</span>}
            </NavLink>
          ))}
        </div>

        <div className="border-t border-slate-800 p-4">
          <button onClick={logout} className="flex w-full items-center justify-center gap-3 rounded-lg bg-red-500/90 px-4 py-3 font-semibold text-white transition hover:bg-red-600">
            <FaSignOutAlt />
            {open && "Logout"}
          </button>
        </div>
      </aside>

      <main className="flex-1 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.1),_transparent_35%)] p-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 shadow-lg shadow-cyan-500/10">
            <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
            <p className="text-sm text-slate-400">Edit your portfolio content and preview it instantly.</p>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
