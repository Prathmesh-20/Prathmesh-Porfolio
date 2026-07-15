import { useEffect, useState } from "react";
import { useContent } from "../../context/ContentContext";

const HomeEditor = () => {
  const { content, updateSection } = useContent();
  const [formData, setFormData] = useState(content.home);

  useEffect(() => {
    setFormData(content.home);
  }, [content.home]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateSection("home", formData);
    alert("Home section updated successfully!");
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10">
      <h2 className="mb-6 text-2xl font-bold text-cyan-400">Edit Home Section</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-slate-300">Eyebrow</label>
          <input name="eyebrow" value={formData.eyebrow} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Greeting</label>
          <input name="greeting" value={formData.greeting} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Name</label>
          <input name="name" value={formData.name} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Surname</label>
          <input name="surname" value={formData.surname} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Role</label>
          <input name="role" value={formData.role} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Button Label</label>
          <input name="buttonText" value={formData.buttonText} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-slate-300">Description</label>
          <textarea name="description" rows="4" value={formData.description} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
      </div>
      <button onClick={handleSave} className="mt-6 rounded-lg bg-cyan-500 px-6 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">Save Changes</button>
    </div>
  );
};

export default HomeEditor;
