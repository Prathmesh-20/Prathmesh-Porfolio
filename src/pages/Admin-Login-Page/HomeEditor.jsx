// src/pages/Admin-Login-Page/HomeEditor.jsx
import { useState } from "react";

const HomeEditor = () => {
  // Initial state (you can fetch this from an API or local storage later)
  const [title, setTitle] = useState("Welcome to My Portfolio");
  const [subtitle, setSubtitle] = useState("Frontend Developer & Designer");
  const [description, setDescription] = useState(
    "I build modern, responsive web applications with React and Tailwind CSS."
  );

  // Save handler (replace with API call or DB update)
  const handleSave = () => {
    console.log("Saved Home Section:", { title, subtitle, description });
    alert("Home section updated successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Edit Home Section</h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
      </div>

      {/* Subtitle */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Subtitle</label>
        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded font-semibold transition"
      >
        Save Changes
      </button>
    </div>
  );
};

export default HomeEditor;
