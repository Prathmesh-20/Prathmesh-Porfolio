import { useEffect, useState } from "react";
import { useContent } from "../../context/ContentContext";

const ContactEditor = () => {
  const { content, updateSection } = useContent();
  const [formData, setFormData] = useState(content.contact);

  useEffect(() => {
    setFormData(content.contact);
  }, [content.contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateSection("contact", formData);
    alert("Contact section updated successfully!");
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10">
      <h2 className="mb-6 text-2xl font-bold text-cyan-400">Edit Contact Section</h2>
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm text-slate-300">Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Phone</label>
          <input name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Address</label>
          <textarea name="address" rows="3" value={formData.address} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Availability</label>
          <textarea name="availability" rows="3" value={formData.availability} onChange={handleChange} className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        </div>
      </div>
      <button onClick={handleSave} className="mt-6 rounded-lg bg-cyan-500 px-6 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">Save Changes</button>
    </div>
  );
};

export default ContactEditor;
