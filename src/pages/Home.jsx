import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const Home = () => {
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

            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-medium mb-6">
              👋 Welcome To My Portfolio
            </span>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-3">
              Hello, I'm
            </h2>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

              <span className="text-white">
                Prathmesh
              </span>

              <br />

              <span className="text-cyan-400">
                Bhagwat
              </span>

            </h1>

            <h3 className="text-xl md:text-2xl text-gray-300 mt-6 font-medium">
              Computer Science Engineering Student
            </h3>

            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">

              Passionate about developing modern web applications,
              learning new technologies, and solving real-world
              problems using

              <span className="text-cyan-400 font-semibold">
                {" "}React, Python, Java, Django,
                Machine Learning
              </span>

              {" "}and modern frontend technologies.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/projects"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View Projects
                <FaArrowRight />
              </Link>

              {/* <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <FaDownload />
                Resume
              </a> */}

            </div>

            {/* Social Icons */}

            {/* <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex justify-center items-center text-xl transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex justify-center items-center text-xl transition duration-300"
              >
                <FaLinkedin />
              </a>

            </div> */}

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

              <img
                src={profile}
                alt="Profile"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-500 shadow-2xl hover:scale-105 transition duration-500"
              />

            </div>

          </div>

        </div>

        {/* Skills */}

        {/* <div className="mt-20 flex flex-wrap justify-center gap-4">

          {[
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Python",
            "Java",
            "Django",
            "Machine Learning",
            "SQL",
            "HTML",
            "CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-slate-800 border border-slate-700 rounded-full text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition duration-300 cursor-pointer"
            >
              {skill}
            </span>
          ))}

        </div> */}

      </div>

    </section>
  );
};

export default Home;