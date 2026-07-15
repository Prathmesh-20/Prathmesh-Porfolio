import { useEffect, useState } from "react";
import { useContent } from "../../context/ContentContext";

const AboutEditor = () => {
  const { content, updateSection } = useContent();
  const [formData, setFormData] = useState(content.about);

  useEffect(() => {
    setFormData(content.about);
  }, [content.about]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateSection("about", formData);
    alert("About section updated successfully!");
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10">
      <h2 className="mb-6 text-2xl font-bold text-cyan-400">Edit About Section</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-slate-300">Heading</label>
          <input name="heading" value={formData.heading} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Name</label>
          <input name="name" value={formData.name} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-slate-300">Intro</label>
          <textarea name="intro" rows="3" value={formData.intro} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-slate-300">Education</label>
          <input name="education" value={formData.education} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-slate-300">Bio</label>
          <textarea name="bio" rows="5" value={formData.bio} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
      </div>
      <button onClick={handleSave} className="mt-6 rounded-lg bg-cyan-500 px-6 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">Save Changes</button>
    </div>
  );
};

export default AboutEditor;
