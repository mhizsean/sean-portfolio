"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  FileText,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "estherseun.adeyi@outlook.com",
      href: "mailto:estherseun.adeyi@outlook.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 79 0041 8058",
      href: "tel:+44790041805",
    },
    { icon: MapPin, label: "Location", value: "London, UK", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, label: "Github", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: FileText, label: "CV", href: "#" },
  ];

  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-center md:text-left">
          Contact Me
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          I&apos;d love to hear from you. Whether for collaboration, a job
          opportunity, speaking engagement or just to say hi, I&apos;ll get back
          to you as soon as possible.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        {/* <motion.div
          className="bg-dark-card border border-dark-border rounded-lg p-8 md:p-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent-primary text-dark-bg font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-accent-primary/90 transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div> */}

        {/* Contact Info & Social Links */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  className="flex items-center gap-4 p-4 bg-dark-card border border-dark-border rounded-lg hover:border-accent-primary transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-dark-surface rounded-lg group-hover:bg-accent-primary/20 transition-colors">
                    <Icon className="text-accent-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{method.label}</div>
                    <div className="text-white">{method.value}</div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 p-4 bg-dark-card border border-dark-border rounded-lg hover:border-accent-primary transition-colors group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon
                      className="text-gray-400 group-hover:text-accent-primary transition-colors"
                      size={20}
                    />
                    <span className="text-sm text-gray-400 group-hover:text-accent-primary transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
