"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { contactInfo, socialLinks } from "@/lib/portfolio-data";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 mb-6">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Let's Work <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Together</span>
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {contactInfo.bio}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group block"
              >
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-all duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="font-semibold text-zinc-100 mb-2">Email</h3>
                    <p className="text-sm text-zinc-400 group-hover:text-cyan-400 transition-colors break-all">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="group block"
              >
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-all duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-zinc-100 mb-2">Phone</h3>
                    <p className="text-sm text-zinc-400 group-hover:text-blue-400 transition-colors">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>
              </a>

              <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-zinc-100 mb-2">Location</h3>
                <p className="text-sm text-zinc-400">{contactInfo.location}</p>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all hover:scale-110"
                      aria-label={social.name}
                    >
                      {socialIcons[social.icon] || <Mail className="w-5 h-5" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 lg:p-10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl opacity-0 hover:opacity-5 blur-xl transition-all duration-500" />
                
                <div className="relative">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-zinc-100 mb-2">Send a Message</h3>
                    <p className="text-zinc-400">I'll get back to you within 24 hours</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-all"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Project inquiry / Collaboration opportunity"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or how we can work together..."
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">Something went wrong. Please try again.</span>
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}