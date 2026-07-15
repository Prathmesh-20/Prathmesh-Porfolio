import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

export const adminSections = [
  { to: "/dashboard", label: "Overview" },
  { to: "/dashboard/home", label: "Home" },
  { to: "/dashboard/about", label: "About" },
  { to: "/dashboard/projects", label: "Projects" },
  { to: "/dashboard/skills", label: "Skills" },
  { to: "/dashboard/contact", label: "Contact" },
  { to: "/dashboard/links", label: "Links" },
];

function EditorPage({ title }) {
  return (
    <div style={{ padding: "20px", background: "#111827", color: "white", borderRadius: "10px" }}>
      <h3>{title}</h3>
      <p>This section is ready for editing.</p>
    </div>
  );
}

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // no real credentials required
    localStorage.setItem("isAdmin", "true");
    navigate("/dashboard", { replace: true });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#0f172a",
          padding: "32px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "8px", textAlign: "center" }}>
          Admin Login
        </h2>
        <p style={{ color: "#94a3b8", textAlign: "center", marginBottom: "24px" }}>
          Sign in to access the dashboard
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        >
          <div>
            <label style={{ display: "block", marginBottom: "6px", color: "#cbd5e1" }}>
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter email"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #334155",
                background: "#111827",
                color: "white",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "6px", color: "#cbd5e1" }}>
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter password"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #334155",
                background: "#111827",
                color: "white",
                outline: "none",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: "8px",
              padding: "12px",
              borderRadius: "10px",
              background: "#22d3ee",
              color: "#0f172a",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Login
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              fontSize: "13px",
              marginTop: "6px",
            }}
          >
            No credentials required — enter anything to continue
          </p>
        </form>
      </div>
    </div>
  );
}

export function DashboardOverview() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-cyan-500/10">
      <h2 className="text-2xl font-semibold text-cyan-400">Dashboard Overview</h2>
      <p className="mt-2 text-slate-400">Welcome to your admin dashboard. Select a section on the left to start editing your portfolio content.</p>
    </div>
  );
}

export function ProtectedRoute({ children }) {
  if (localStorage.getItem("isAdmin") !== "true") {
    return <Navigate to="/admin" replace />;
  }

  return children;
}

export default AdminLogin;