import { Link } from "react-router-dom";
import defaultProfile from "../assets/profile.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { useContent } from "../context/ContentContext";

const Home = () => {
  const { content } = useContent();

  // ✅ Safely access home section
  const home = content?.home || {};

  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            {home.eyebrow && (
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-medium mb-6">
                {home.eyebrow}
              </span>
            )}

            {home.greeting && (
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-3">
                {home.greeting}
              </h2>
            )}

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              <span className="text-white">{home.name}</span>
              <br />
              <span className="text-cyan-400">{home.surname}</span>
            </h1>

            {home.role && (
              <h3 className="text-xl md:text-2xl text-gray-300 mt-6 font-medium">
                {home.role}
              </h3>
            )}

            {home.description && (
              <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
                {home.description}
              </p>
            )}

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              {home.buttonText && (
                <Link
                  to="/projects"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {home.buttonText}
                  <FaArrowRight />
                </Link>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

              <img
                src={
                  home.profileImage && home.profileImage.trim()
                    ? home.profileImage
                    : defaultProfile
                }
                alt="Profile"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-500 shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
