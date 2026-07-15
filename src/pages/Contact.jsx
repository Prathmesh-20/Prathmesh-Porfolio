import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContent } from "../context/ContentContext";

const ContactSchema = Yup.object({
  user_name: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .max(50, "Name is too long")
    .required("Full Name is required"),

  user_email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email Address is required"),

  user_phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone Number must be exactly 10 digits")
    .required("Phone Number is required"),

  company: Yup.string().max(100, "Company name is too long"),

  subject: Yup.string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject is too long")
    .required("Subject is required"),

  inquiry_type: Yup.string().required("Please select an inquiry type"),

  message: Yup.string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message is too long")
    .required("Message is required"),
});

const Contact = () => {
  const form = useRef();
  const { content } = useContent();
  const contact = content.contact;
  const serviceId =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_jt55uye";
  const templateId =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_rgcn7go";
  const publicKey =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "vWs0RdzrO616fSdaw";

  const sendEmail = (e) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      alert(
        "Email form is not configured yet. Add the VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY values to your .env file.",
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
        alert(`Error: ${error.text || error.message || JSON.stringify(error)}`);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project, internship opportunity, collaboration, freelance
            work, or just want to connect? Send me a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-5">
              <div>
                <h4 className="text-cyan-400 font-medium">Email</h4>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-300 hover:text-cyan-400"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <h4 className="text-cyan-400 font-medium">Phone</h4>
                <p className="text-gray-300">{contact.phone}</p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-medium">Location</h4>
                <p className="text-gray-300">{contact.address}</p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-medium">Availability</h4>
                <p className="text-gray-300">{contact.availability}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Formik
            initialValues={{
              user_name: "",
              user_email: "",
              user_phone: "",
              company: "",
              subject: "",
              inquiry_type: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm }) => {
              const formattedMessage = [
                `Name: ${values.user_name}`,
                `Email: ${values.user_email}`,
                `Phone: ${values.user_phone || "N/A"}`,
                `Company / Organization: ${values.company || "N/A"}`,
                `Subject: ${values.subject}`,
                `Inquiry Type: ${values.inquiry_type}`,
                "",
                "Message:",
                values.message,
              ].join("\n");

              const templateParams = {
                from_name: values.user_name,
                reply_to: values.user_email,
                user_name: values.user_name,
                user_email: values.user_email,
                user_phone: values.user_phone,
                company: values.company || "N/A",
                subject: values.subject,
                inquiry_type: values.inquiry_type,
                message: formattedMessage,
              };

              emailjs
                .send(serviceId, templateId, templateParams, publicKey)
                .then(() => {
                  alert("Message Sent Successfully!");
                  resetForm();
                })
                .catch((error) => {
                  console.error(error);
                  alert("Failed to send message.");
                });
            }}
          >
            {() => (
              <Form className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <Field
                      type="text"
                      name="user_name"
                      placeholder="Full Name"
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600"
                    />
                    <ErrorMessage
                      name="user_name"
                      component="p"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <Field
                      type="email"
                      name="user_email"
                      placeholder="Email Address"
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600"
                    />
                    <ErrorMessage
                      name="user_email"
                      component="p"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <Field
                      type="tel"
                      name="user_phone"
                      placeholder="Phone Number"
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600"
                    />
                    <ErrorMessage
                      name="user_phone"
                      component="p"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <Field
                      type="text"
                      name="company"
                      placeholder="Company / Organization"
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <Field
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600"
                  />
                  <ErrorMessage
                    name="subject"
                    component="p"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div className="mb-5">
                  <Field
                    as="select"
                    name="inquiry_type"
                    className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600"
                  >
                    <option value="">Select Inquiry Type</option>
                    <option value="Internship Opportunity">
                      Internship Opportunity
                    </option>
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </Field>

                  <ErrorMessage
                    name="inquiry_type"
                    component="p"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div className="mb-6">
                  <Field
                    as="textarea"
                    rows="6"
                    name="message"
                    placeholder="Write your message..."
                    className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 resize-none"
                  />

                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all py-3 rounded-lg font-semibold"
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;
