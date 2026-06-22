const projects = [
    {
    title: "Real Estate Website",
    description: "Modern property listing platform built with React.",
    liveLink: "https://real-estate-website.vercel.app",
    githubLink: "https://github.com/yourusername/real-estate",
    
  }
  ,
  {
    title: "Digital Marketing Agency",
    description: "Business website with service showcase and contact form.",
  },
  {
    title: "Online Exam System",
    description: "Quiz and examination platform with admin dashboard.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
          >
            {/* Edit Project Details */}
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.description}
            </p>
            <div className="flex gap-3 mt-4">
  <a
    href="https://real-estate-prathmesh4.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
  >
    Live Demo
  </a>

  <a
    href="https://github.com/Prathmesh-20/Real-Estate"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-cyan-500 rounded-lg hover:bg-cyan-500"
  >
    GitHub
  </a>
</div>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Projects;