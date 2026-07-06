import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    {
      title: "Home",
      icon: <FaHome />,
      path: "/",
    },
    {
      title: "About",
      icon: <FaUser />,
      path: "/about",
    },
    {
      title: "Projects",
      icon: <FaProjectDiagram />,
      path: "/projects",
    },
    {
      title: "Skills",
      icon: <FaTools />,
      path: "/skills",
    },
    {
      title: "Contact",
      icon: <FaEnvelope />,
      path: "/contact",
    },
    {
      title: "Links",
      icon: <FaLink />,
      path: "/links",
    },
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
              <span className="text-xl font-bold text-cyan-400">
                Admin Panel
              </span>
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

              {open && (
                <span className="font-medium">
                  {item.title}
                </span>
              )}
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

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-cyan-400 mb-4">
            Admin Dashboard
          </h1>

          <p className="text-gray-400 text-lg">
            Select a page from the sidebar to manage your portfolio.
          </p>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;