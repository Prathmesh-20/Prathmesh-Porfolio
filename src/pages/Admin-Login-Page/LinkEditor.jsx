import { useEffect, useState } from "react";
import { useContent } from "../../context/ContentContext";

const LinksEditor = () => {
  const { content, updateSection } = useContent();
  const [links, setLinks] = useState(content.links);
  const [newLink, setNewLink] = useState({ platform: "", url: "" });

  useEffect(() => {
    setLinks(content.links);
  }, [content.links]);

  const addLink = () => {
    if (!newLink.platform.trim() || !newLink.url.trim()) return;
    setLinks((prev) => [...prev, { platform: newLink.platform.trim(), url: newLink.url.trim() }]);
    setNewLink({ platform: "", url: "" });
  };

  const deleteLink = (index) => {
    setLinks((prev) => prev.filter((_, linkIndex) => linkIndex !== index));
  };

  const handleSave = () => {
    updateSection("links", links);
    alert("Links updated successfully!");
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10">
      <h2 className="mb-6 text-2xl font-bold text-cyan-400">Edit Links</h2>
      <div className="mb-6 space-y-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
        <input value={newLink.platform} onChange={(e) => setNewLink((prev) => ({ ...prev, platform: e.target.value }))} placeholder="Platform (e.g. GitHub)" className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        <input type="url" value={newLink.url} onChange={(e) => setNewLink((prev) => ({ ...prev, url: e.target.value }))} placeholder="URL (e.g. https://...)" className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0" />
        <button onClick={addLink} className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">Add Link</button>
      </div>
      <div className="space-y-3">
        {links.map((link, index) => (
          <div key={`${link.platform}-${index}`} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3">
            <div>
              <h3 className="font-semibold text-cyan-300">{link.platform}</h3>
              <a href={link.url} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-cyan-300">{link.url}</a>
            </div>
            <button onClick={() => deleteLink(index)} className="text-sm font-medium text-red-400 transition hover:text-red-300">Delete</button>
          </div>
        ))}
      </div>
      <button onClick={handleSave} className="mt-6 rounded-lg bg-cyan-500 px-6 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">Save Changes</button>
    </div>
  );
};

export default LinksEditor;
