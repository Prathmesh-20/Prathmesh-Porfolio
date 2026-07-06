import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import * as Yup from "yup";


const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const AdminLogin = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    const adminEmail = "admin@gmail.com";
    const adminPassword = "123456";

    if (
      values.email === adminEmail &&
      values.password === adminPassword
    ) {
      localStorage.setItem("isAdmin", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-5">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl border border-cyan-500 p-8">

        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-2">
          Admin Login
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to access dashboard
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">

            <div>
              <label className="text-gray-300 block mb-2">
                Email
              </label>

              <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700 px-3">
                <FaEnvelope className="text-cyan-400" />

                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full bg-transparent outline-none p-3 text-white"
                />
              </div>

              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-2">
                Password
              </label>

              <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700 px-3">
                <FaLock className="text-cyan-400" />

                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-full bg-transparent outline-none p-3 text-white"
                />
              </div>

              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 py-3 rounded-lg font-semibold text-black"
            >
              Login
            </button>

          </Form>
        </Formik>

      </div>
    </div>
  );
};

export default AdminLogin;