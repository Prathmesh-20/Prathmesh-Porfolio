// src/pages/Admin-Login-Page/ProjectsEditor.jsx
import { useState } from "react";

const ProjectsEditor = () => {
  // Initial state (replace with API data later if needed)
  const [projects, setProjects] = useState([
    { title: "Portfolio Website", description: "A personal portfolio built with React and Tailwind CSS." },
    { title: "Google Keep Clone", description: "A note-taking app with CRUD functionality." },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Add new project
  const addProject = () => {
    if (newTitle.trim() !== "" && newDescription.trim() !== "") {
      setProjects([...projects, { title: newTitle, description: newDescription }]);
      setNewTitle("");
      setNewDescription("");
    }
  };

  // Delete project
  const deleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  // Save handler (replace with API call or DB update)
  const handleSave = () => {
    console.log("Saved Projects:", projects);
    alert("Projects updated successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-slate-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Edit Projects</h2>

      {/* Add New Project */}
      <div className="mb-6">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Project Title"
          className="w-full mb-3 px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Project Description"
          rows="3"
          className="w-full mb-3 px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
        <button
          onClick={addProject}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded font-semibold transition"
        >
          Add Project
        </button>
      </div>

      {/* Project List */}
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li
            key={index}
            className="bg-slate-800 p-4 rounded flex justify-between items-start"
          >
            <div>
              <h3 className="text-lg font-semibold text-cyan-300">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
            <button
              onClick={() => deleteProject(index)}
              className="text-red-400 hover:text-red-600 ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded font-semibold transition"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ProjectsEditor;
