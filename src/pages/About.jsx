import { useContent } from "../context/ContentContext";

const About = () => {
  const { content } = useContent();
  const about = content.about;

  return (
    <section
      id="about"
      className="py-20 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            {about.heading.split(" ").slice(0, -1).join(" ")} {" "}
            <span className="text-cyan-400">{about.heading.split(" ").slice(-1)[0]}</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            {about.intro}
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl shadow-xl p-8 md:p-12 hover:border-cyan-400 transition-all duration-500">

          <p className="text-gray-300 leading-9 text-lg">
            <span className="text-cyan-400 font-semibold">{about.name}</span>{" "}
            <span className="font-semibold text-white">{about.education}</span>
            <br />
            <br />
            {about.bio}
          </p>

          {/* Skills */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">

            {about.skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;