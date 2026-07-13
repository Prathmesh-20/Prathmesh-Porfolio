// src/pages/Admin-Login-Page/ContactEditor.jsx
import { useState } from "react";

const ContactEditor = () => {
  // Initial state (replace with API data later if needed)
  const [email, setEmail] = useState("yourname@example.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [address, setAddress] = useState("Ahmedabad, Gujarat, India");

  // Save handler (replace with API call or DB update)
  const handleSave = () => {
    console.log("Saved Contact Section:", { email, phone, address });
    alert("Contact section updated successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Edit Contact Section</h2>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-cyan-400"
        />
      </div>

      {/* Address */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows="3"
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

export default ContactEditor;
