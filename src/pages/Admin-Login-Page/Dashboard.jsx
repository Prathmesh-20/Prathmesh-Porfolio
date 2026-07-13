// Dashboard.js
import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
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

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside
        className={`${
          open ? "w-64" : "w-20"
        } bg-slate-900 border-r border-cyan-500 duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          {open && (
            <div className="flex items-center gap-3">
              <FaUserShield className="text-cyan-400 text-2xl" />
              <span className="text-xl font-bold text-cyan-400">Admin Panel</span>
            </div>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="text-cyan-400 text-xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 py-5">
          {menu.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-4 px-6 py-4 hover:bg-cyan-500 hover:text-black transition-all"
            >
              <span className="text-xl">{item.icon}</span>
              {open && <span className="font-medium">{item.title}</span>}
            </button>
          ))}
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-lg transition"
          >
            <FaSignOutAlt />
            {open && "Logout"}
          </button>
        </div>
      </aside>

      {/* Main Content changes dynamically */}
      <main className="flex-1 p-6">
        <Outlet /> {/* This is where nested routes render */}
      </main>
    </div>
  );
};

export default Dashboard;
