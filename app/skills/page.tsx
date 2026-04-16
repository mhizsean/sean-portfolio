"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/constants/skills";

const studies = [
  {
    title: "Master in Project Management",
    institution: "De Montfort University",
    period: "2023 - 2024",
    description:
      "Master in Project Management from De Montfort University, UK. I have learned about the principles of project management, the different types of projects, the different stages of a project, the different roles in a project, the different tools and techniques used in project management, and the different frameworks and standards used in project management.",
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-center md:text-left">
          Skills / Studies
        </h1>
      </motion.div>

      {/* Skills Section */}
      <section className="mb-24">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="bg-dark-card border border-dark-border rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ borderColor: "#d4af37", scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="text-accent-primary" size={28} />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-dark-surface border border-dark-border rounded text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Studies Section */}
      <section>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="space-y-6">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-6 md:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ borderColor: "#d4af37" }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold mb-2 md:mb-0">
                  {study.title}
                </h3>
                <span className="text-accent-primary text-sm">
                  {study.period}
                </span>
              </div>
              <p className="text-gray-400 mb-2">{study.institution}</p>
              <p className="text-gray-300">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
