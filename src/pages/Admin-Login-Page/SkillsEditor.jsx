import { useEffect, useState } from "react";
import { useContent } from "../../context/ContentContext";

const SkillsEditor = () => {
  const { content, updateSection } = useContent();
  const [skills, setSkills] = useState(content.skills);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    setSkills(content.skills);
  }, [content.skills]);

  const addSkill = () => {
    const value = newSkill.trim();
    if (!value) return;
    setSkills((prev) => [...prev, { id: Date.now(), name: value }]);
    setNewSkill("");
  };

  const deleteSkill = (id) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  };

  const handleSave = () => {
    updateSection("skills", skills);
    alert("Skills updated successfully!");
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10">
      <h2 className="mb-6 text-2xl font-bold text-cyan-400">Edit Skills</h2>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <input value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Enter a new skill" className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        <button onClick={addSkill} className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">Add</button>
      </div>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3">
            <span className="text-slate-200">{skill.name}</span>
            <button onClick={() => deleteSkill(skill.id)} className="text-sm font-medium text-red-400 transition hover:text-red-300">Delete</button>
          </div>
        ))}
      </div>
      <button onClick={handleSave} className="mt-6 rounded-lg bg-cyan-500 px-6 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">Save Changes</button>
    </div>
  );
};

export default SkillsEditor;
