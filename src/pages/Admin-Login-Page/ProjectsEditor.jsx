import { useEffect, useState } from "react";
import { useContent } from "../../context/ContentContext";

const ProjectsEditor = () => {
  const { content, updateSection } = useContent();
  const [projects, setProjects] = useState(content.projects);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    liveLink: "",
    githubLink: "",
  });

  useEffect(() => {
    setProjects(content.projects);
  }, [content.projects]);

  const addProject = () => {
    if (!newProject.title.trim() || !newProject.description.trim()) return;

    setProjects((prev) => [
      ...prev,
      {
        title: newProject.title.trim(),
        description: newProject.description.trim(),
        liveLink: newProject.liveLink.trim(),
        githubLink: newProject.githubLink.trim(),
      },
    ]);
    setNewProject({ title: "", description: "", liveLink: "", githubLink: "" });
  };

  const updateProject = (index, field, value) => {
    setProjects((prev) =>
      prev.map((project, projectIndex) =>
        projectIndex === index ? { ...project, [field]: value } : project
      )
    );
  };

  const deleteProject = (index) => {
    setProjects((prev) => prev.filter((_, projectIndex) => projectIndex !== index));
  };

  const handleSave = () => {
    updateSection("projects", projects);
    alert("Projects updated successfully!");
  };

  return (
    <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10">
      <h2 className="mb-6 text-2xl font-bold text-cyan-400">Edit Projects</h2>

      <div className="mb-6 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
        <div className="grid gap-3 md:grid-cols-2">
          <input
            value={newProject.title}
            onChange={(e) => setNewProject((prev) => ({ ...prev, title: e.target.value }))}
            placeholder="Project Title"
            className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0"
          />
          <input
            value={newProject.liveLink}
            onChange={(e) => setNewProject((prev) => ({ ...prev, liveLink: e.target.value }))}
            placeholder="Live URL"
            className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0"
          />
          <textarea
            value={newProject.description}
            onChange={(e) => setNewProject((prev) => ({ ...prev, description: e.target.value }))}
            rows="3"
            placeholder="Project Description"
            className="md:col-span-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0"
          />
          <input
            value={newProject.githubLink}
            onChange={(e) => setNewProject((prev) => ({ ...prev, githubLink: e.target.value }))}
            placeholder="GitHub URL"
            className="md:col-span-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0"
          />
        </div>
        <button
          onClick={addProject}
          className="mt-4 rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Add Project
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={`${project.title}-${index}`} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 space-y-3">
                <input
                  value={project.title}
                  onChange={(e) => updateProject(index, "title", e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0"
                />
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(index, "description", e.target.value)}
                  rows="3"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0"
                />
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    value={project.liveLink}
                    onChange={(e) => updateProject(index, "liveLink", e.target.value)}
                    placeholder="Live URL"
                    className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0"
                  />
                  <input
                    value={project.githubLink}
                    onChange={(e) => updateProject(index, "githubLink", e.target.value)}
                    placeholder="GitHub URL"
                    className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0"
                  />
                </div>
              </div>
              <button
                onClick={() => deleteProject(index)}
                className="rounded-lg border border-red-500/40 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="mt-6 rounded-lg bg-cyan-500 px-6 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ProjectsEditor;
