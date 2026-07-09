import React, { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { submitContact } from "../api/contact.js";
import { useToast } from "../context/ToastContext.jsx";
import { PERSONAL_INFO } from "../utils/constants.js";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Name must be at least 2 characters";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address";
    if (form.message.trim().length < 10) next.message = "Message must be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      await submitContact(form);
      showToast("Message sent! I'll get back to you soon.", "success");
      setForm(INITIAL_FORM);
    } catch (err) {
      const message = err?.response?.data?.message || "Something went wrong. Please try again.";
      showToast(message, "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <p className="eyebrow">06. Get in touch</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Contact Me</h2>
      <p className="mt-4 max-w-xl text-text-muted">
        Have an opportunity, question, or just want to say hi? My inbox is open — I'll try my best to get back to you.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <a href={PERSONAL_INFO.socials.email} className="glass-card flex items-center gap-3 p-4 hover:border-accent">
            <FiMail className="text-accent" /> <span className="text-sm">{PERSONAL_INFO.email}</span>
          </a>
          <div className="glass-card flex items-center gap-3 p-4">
            <FiPhone className="text-accent" /> <span className="text-sm">{PERSONAL_INFO.phone}</span>
          </div>
          <div className="glass-card flex items-center gap-3 p-4">
            <FiMapPin className="text-accent" /> <span className="text-sm">{PERSONAL_INFO.location}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="glass-card space-y-4 p-6 md:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-text-muted">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm outline-none focus:border-accent"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-text-muted">Email</label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm outline-none focus:border-accent"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-xs text-text-muted">Subject (optional)</label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              placeholder="What's this about?"
              className="w-full rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs text-text-muted">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me a bit about the opportunity or your question..."
              className="w-full resize-none rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60">
            {submitting ? "Sending..." : (<>Send Message <FiSend size={16} /></>)}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
