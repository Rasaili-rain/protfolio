"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { contactInfo, socialLinks } from "@/lib/portfolio-data";

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}
export default function Contact() {
  const contactLinks: ContactLink[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: contactInfo.location,
      href: "#",
    },
  ];

  const socialIcons: Record<string, React.ReactNode> = {
    github: <Github className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    mail: <Mail className="w-5 h-5" />,
  };

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
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{contactInfo.bio}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 space-y-4">
            {contactLinks.map((link, index) => (
              <a key={index} href={link.href} className="group cursor-pointer block">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">{link.icon}</div>
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-1">{link.label}</p>
                        <p className="text-foreground font-medium group-hover:text-accent transition-colors cursor-pointer">{link.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}

            <div className="pt-8">
              <h3 className="font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-accent transition-colors duration-300 cursor-pointer hover:shadow-lg"
                    aria-label={social.name}
                  >
                    {socialIcons[social.icon] || <Mail className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-text transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-text transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-text transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none cursor-text transition-all"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 flex items-center gap-2">
                    <span>Success</span>
                    Message sent successfully! I'll be in touch soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 flex items-center gap-2">
                    <span>Error</span>
                    Something went wrong. Please try again.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-background font-medium cursor-pointer transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
