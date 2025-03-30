"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

emailjs.init(PUBLIC_KEY);

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Input changed:", e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("Updated form data:", {
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "info", message: "Sending..." });

    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
      console.error("EmailJS configuration is missing");
      setStatus({
        type: "error",
        message: "Email service configuration is missing",
      });
      return;
    }

    try {
      console.log("Attempting to send email...");
      console.log("Form Data:", formData);
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: "Mainul",
          from_name: formData.name || "Anonymous",
          message: `Subject: ${formData.subject}\n\nMessage:\n${formData.message}`,
          reply_to: formData.email,
          subject: formData.subject,
          email: formData.email,
        },
        PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      setStatus({
        type: "success",
        message: "I've got your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`space-y-6 backdrop-blur-lg bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ${className}`}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors resize-none"
          placeholder="Your message here..."
        />
      </div>

      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            status.type === "success"
              ? "bg-green-500/10 text-green-400 border border-green-500/20"
              : "bg-red-500/10 text-red-400 border border-red-500/20"
          }`}
        >
          {status.message}
        </motion.div>
      )}

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 shadow-lg shadow-blue-500/20"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}
