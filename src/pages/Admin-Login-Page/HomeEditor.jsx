import { ErrorMessage, Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import profile from "../../assets/profile.jpeg";
import { useContent } from "../../context/ContentContext";

const photoSchema = Yup.object({
  profileImage: Yup.string().trim(),
});

const HomeEditor = () => {
  const { content, updateSection } = useContent();
  const [formData, setFormData] = useState(content.home);
  const fileInputRef = useRef(null);

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

  const handleRemovePicture = (setFieldValue) => {
    setFormData((prev) => {
      const nextHome = { ...prev, profileImage: "" };
      updateSection("home", nextHome);
      return nextHome;
    });
    setFieldValue("profileImage", "");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
        <div className="md:col-span-2 rounded-lg border border-slate-700 bg-slate-800/70 p-4">
          <Formik
            initialValues={{ profileImage: formData.profileImage || "" }}
            enableReinitialize
            validationSchema={photoSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              if (!values.profileImage) {
                setSubmitting(false);
                return;
              }

              const nextHome = { ...formData, profileImage: values.profileImage };
              setFormData(nextHome);
              updateSection("home", nextHome);
              resetForm({ values: { profileImage: values.profileImage } });
              setSubmitting(false);
              alert("Profile picture updated successfully!");
            }}
          >
            {({ errors, touched, setFieldValue, isSubmitting, values }) => (
              <Form className="space-y-4">
                <label className="mb-2 block text-sm text-slate-300">Portfolio Photo</label>
                <input
                  ref={fileInputRef}
                  id="profileImage"
                  name="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    const reader = new FileReader();
                    reader.onload = () => {
                      if (typeof reader.result === "string") {
                        setFieldValue("profileImage", reader.result);
                        setFormData((prev) => ({ ...prev, profileImage: reader.result }));
                      }
                    };
                    reader.readAsDataURL(file);
                  }}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 file:mr-3 file:rounded file:border-0 file:bg-cyan-500 file:px-3 file:py-1 file:text-sm file:font-semibold file:text-slate-950"
                />
                <ErrorMessage
                  name="profileImage"
                  component="div"
                  className="text-sm text-red-400"
                />
                <div className="mt-4 flex items-center gap-4">
                  <img
                    src={values.profileImage && values.profileImage.trim() ? values.profileImage : formData.profileImage && formData.profileImage.trim() ? formData.profileImage : profile}
                    alt="Portfolio preview"
                    className="h-24 w-24 rounded-full border-2 border-cyan-500 object-cover"
                  />
                  <p className="text-sm text-slate-400">Upload a new image to replace the profile photo shown on the home page.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Saving..." : "Save Photo"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemovePicture(setFieldValue)}
                    className="rounded-lg border border-red-500/50 bg-red-500/10 px-5 py-2 font-semibold text-red-300 transition hover:bg-red-500/20"
                  >
                    Remove Picture
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <button onClick={handleSave} className="mt-6 rounded-lg bg-cyan-500 px-6 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">Save Changes</button>
    </div>
  );
};

export default HomeEditor;
