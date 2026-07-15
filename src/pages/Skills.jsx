import { useContent } from "../context/ContentContext";

function Skills() {
  const { content } = useContent();
  const skills = content.skills;

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">My Skills</h1>
        <p className="text-center text-gray-400 mb-12">
          Technologies and tools I use to build modern applications.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center hover:border-cyan-400 hover:-translate-y-3 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
