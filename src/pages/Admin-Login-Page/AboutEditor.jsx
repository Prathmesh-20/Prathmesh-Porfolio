// src/pages/Admin-Login-Page/AboutEditor.jsx
import { useState } from "react";

const AboutEditor = () => {
  // Initial state (replace with API data later if needed)
  const [name, setName] = useState("Prathmesh");
  const [headline, setHeadline] = useState("Passionate Web Developer");
  const [bio, setBio] = useState(
    "I am a frontend developer specializing in React.js and Tailwind CSS. I love building clean, responsive, and user-friendly web applications."
  );

  // Save handler (replace with API call or DB update)
  const handleSave = () => {
    console.log("Saved About Section:", { name, headline, bio });
    alert("About section updated successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Edit About Section</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
      </div>

      {/* Headline */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Headline</label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
      </div>

      {/* Bio */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Bio / Description</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows="5"
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

export default AboutEditor;
