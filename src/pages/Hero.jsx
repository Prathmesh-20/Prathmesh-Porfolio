import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-slate-900 text-white flex items-center justify-center overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center">

          {/* Small Heading */}
          <p className="text-cyan-400 uppercase tracking-[6px] text-sm mb-4">
            Welcome To My Portfolio
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            Hi, I'm <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Prathmesh Bhagwat
            </span>

          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-8">

            A passionate
            <span className="text-cyan-400 font-semibold">
              {" "}Computer Science Engineering Student
            </span>{" "}
            focused on building modern web applications using
            <span className="text-white font-semibold">
              {" "}React, Tailwind CSS, Python, Java & Machine Learning.
            </span>

            <br /><br />

            I'm eager to learn new technologies, solve real-world problems,
            and gain valuable industry experience through internships and
            collaborative projects.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="/projects"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold transition duration-300 flex items-center gap-2 shadow-lg hover:scale-105"
            >
              View Projects
              <FaArrowRight />
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-cyan-400 hover:bg-cyan-500 rounded-xl font-semibold transition duration-300 hover:scale-105"
            >
              View Resume
            </a>

          </div>

          {/* Skills */}
          <div className="mt-14 flex flex-wrap justify-center gap-4">

            {[
              "React",
              "Tailwind CSS",
              "Python",
              "Java",
              "Django",
              "Machine Learning",
              "SQL",
              "JavaScript",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-500 transition duration-300"
              >
                {skill}
              </span>
            ))}

          </div>

          {/* Social Icons */}
          <div className="mt-12 flex justify-center gap-6">

            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-500 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-500 transition duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Scroll Down */}
          <div className="mt-16 animate-bounce">

            <span className="text-cyan-400 text-sm tracking-widest">
              ▼ Scroll Down
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;