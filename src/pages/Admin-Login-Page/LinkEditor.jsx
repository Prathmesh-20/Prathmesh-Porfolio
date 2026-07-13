// src/pages/Admin-Login-Page/LinksEditor.jsx
import { useState } from "react";

const LinksEditor = () => {
  // Initial state (replace with API data later if needed)
  const [links, setLinks] = useState([
    { platform: "GitHub", url: "https://github.com/yourusername" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  ]);

  const [newPlatform, setNewPlatform] = useState("");
  const [newUrl, setNewUrl] = useState("");

  // Add new link
  const addLink = () => {
    if (newPlatform.trim() !== "" && newUrl.trim() !== "") {
      setLinks([...links, { platform: newPlatform, url: newUrl }]);
      setNewPlatform("");
      setNewUrl("");
    }
  };

  // Delete link
  const deleteLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  // Save handler (replace with API call or DB update)
  const handleSave = () => {
    console.log("Saved Links:", links);
    alert("Links updated successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-slate-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Edit Links</h2>

      {/* Add New Link */}
      <div className="mb-6 space-y-3">
        <input
          type="text"
          value={newPlatform}
          onChange={(e) => setNewPlatform(e.target.value)}
          placeholder="Platform (e.g., GitHub, LinkedIn)"
          className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
        <input
          type="url"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          placeholder="URL (e.g., https://...)"
          className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
        <button
          onClick={addLink}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded font-semibold transition"
        >
          Add Link
        </button>
      </div>

      {/* Links List */}
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li
            key={index}
            className="bg-slate-800 p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold text-cyan-300">
                {link.platform}
              </h3>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400"
              >
                {link.url}
              </a>
            </div>
            <button
              onClick={() => deleteLink(index)}
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

export default LinksEditor;
