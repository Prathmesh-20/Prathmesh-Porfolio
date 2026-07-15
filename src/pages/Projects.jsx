import { useContent } from "../context/ContentContext";

const Projects = () => {
  const { content } = useContent();
  const projects = content.projects;

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-6">
                {project.description}
              </p>

              {(project.liveLink || project.githubLink) && (
                <div className="flex gap-3 flex-wrap">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-cyan-500 rounded-lg font-medium hover:bg-cyan-600 transition"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 border border-cyan-500 rounded-lg hover:bg-cyan-500 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;