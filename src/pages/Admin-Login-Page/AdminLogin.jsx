import { useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginSchema } from "../../validation/LoginSchema";
import { auth, isFirebaseConfigured } from "../../lib/firebase";

export const adminSections = [
  { to: "/dashboard", label: "Home" },
  { to: "/dashboard/home", label: "Home" },
  { to: "/dashboard/about", label: "About" },
  { to: "/dashboard/projects", label: "Projects" },
  { to: "/dashboard/skills", label: "Skills" },
  { to: "/dashboard/contact", label: "Contact" },
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

  useEffect(() => {
    localStorage.removeItem("isAdmin");
  }, []);

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

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setFieldError, setSubmitting }) => {
            try {
              if (isFirebaseConfigured) {
                await signInWithEmailAndPassword(auth, values.email, values.password);
              }
              localStorage.setItem("isAdmin", "true");
              navigate("/dashboard", { replace: true });
            } catch {
              setFieldError("password", "Email or password is incorrect.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label htmlFor="email" style={{ display: "block", marginBottom: "6px", color: "#cbd5e1" }}>
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: `1px solid ${errors.email && touched.email ? "#f87171" : "#334155"}`,
                    background: "#111827",
                    color: "white",
                    outline: "none",
                  }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "#f87171", fontSize: "12px", marginTop: "6px" }}
                />
              </div>

              <div>
                <label htmlFor="password" style={{ display: "block", marginBottom: "6px", color: "#cbd5e1" }}>
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: `1px solid ${errors.password && touched.password ? "#f87171" : "#334155"}`,
                    background: "#111827",
                    color: "white",
                    outline: "none",
                  }}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "#f87171", fontSize: "12px", marginTop: "6px" }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: "8px",
                  padding: "12px",
                  borderRadius: "10px",
                  background: "#22d3ee",
                  color: "#0f172a",
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  fontWeight: "600",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? "Signing in..." : "Login"}
              </button>

              <p
                style={{
                  textAlign: "center",
                  color: "#64748b",
                  fontSize: "13px",
                  marginTop: "6px",
                }}
              >
                {isFirebaseConfigured
                  ? "Use the email and password created in Firebase Authentication."
                  : "Firebase is not configured — enter any valid email and password to continue locally."}
              </p>
            </Form>
          )}
        </Formik>
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
