import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import {
  SiDjango,
  SiTailwindcss,
  SiMysql,
  SiScikitlearn,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "Django", icon: <SiDjango size={40} /> },
  { name: "Machine Learning", icon: <SiScikitlearn size={40} /> },
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "WordPress", icon: <FaWordpress size={40} /> },
  { name: "SQL", icon: <SiMysql size={40} /> },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">
          My Skills
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Technologies and tools I use to build modern applications.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-slate-800
                p-6
                rounded-2xl
                border
                border-slate-700
                text-center
                hover:border-cyan-400
                hover:-translate-y-3
                hover:shadow-lg
                hover:shadow-cyan-500/20
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <div className="flex justify-center text-cyan-400 mb-4 animate-pulse">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;