import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_jt55uye";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_rgcn7go";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "vWs0RdzrO616fSdaw";

  const sendEmail = (e) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      alert(
        "Email form is not configured yet. Add the VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY values to your .env file."
      );
      return;
    }

    const formData = new FormData(form.current);
    const userName = formData.get("user_name")?.toString().trim() || "";
    const userEmail = formData.get("user_email")?.toString().trim() || "";
    const userPhone = formData.get("user_phone")?.toString().trim() || "";
    const company = formData.get("company")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "";
    const inquiryType = formData.get("inquiry_type")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const fullMessage = [
      `Name: ${userName}`,
      `Email: ${userEmail}`,
      `Phone: ${userPhone || "N/A"}`,
      `Company / Organization: ${company || "N/A"}`,
      `Subject: ${subject}`,
      `Inquiry Type: ${inquiryType}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const templateParams = {
      from_name: userName,
      reply_to: userEmail,
      user_name: userName,
      user_email: userEmail,
      user_phone: userPhone,
      company,
      subject,
      inquiry_type: inquiryType,
      message: fullMessage,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project, internship opportunity, collaboration,
            freelance work, or just want to connect? Send me a
            message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">
              <div>
                <h4 className="text-cyan-400 font-medium">
                  Email
                </h4>
                <a
                  href="mailto:bhagwatp853@gmail.com"
                  className="text-gray-300 hover:text-cyan-400"
                >
                  bhagwatp853@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-cyan-400 font-medium">
                  Phone
                </h4>
                <p className="text-gray-300">
                  +91 6354136921
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-medium">
                  Location
                </h4>
                <p className="text-gray-300">
                  Ahmedabad, Gujarat, India
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-medium">
                  Availability
                </h4>
                <p className="text-gray-300">
                  Open for internships, freelance projects,
                  collaborations, and full-time opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
          >
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                name="company"
                placeholder="Company / Organization"
                className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 mb-5 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-cyan-400"
            />

            <select
              name="inquiry_type"
              className="w-full p-3 mb-5 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-cyan-400"
            >
              <option>Internship Opportunity</option>
              <option>Freelance Project</option>
              <option>Job Opportunity</option>
              <option>Collaboration</option>
              <option>General Inquiry</option>
            </select>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full p-3 mb-6 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-cyan-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;