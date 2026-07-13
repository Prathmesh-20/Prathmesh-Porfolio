// src/pages/Admin-Login-Page/SkillsEditor.jsx
import { useState } from "react";

const SkillsEditor = () => {
  // Initial state (replace with API data later if needed)
  const [skills, setSkills] = useState(["React", "Tailwind CSS", "Node.js"]);
  const [newSkill, setNewSkill] = useState("");

  // Add new skill
  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  // Delete skill
  const deleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // Save handler (replace with API call or DB update)
  const handleSave = () => {
    console.log("Saved Skills:", skills);
    alert("Skills updated successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Edit Skills</h2>

      {/* Add New Skill */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Enter a new skill"
          className="flex-1 px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
        <button
          onClick={addSkill}
          className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded font-semibold transition"
        >
          Add
        </button>
      </div>

      {/* Skills List */}
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-slate-800 px-4 py-2 rounded"
          >
            <span>{skill}</span>
            <button
              onClick={() => deleteSkill(index)}
              className="text-red-400 hover:text-red-600"
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

export default SkillsEditor;
