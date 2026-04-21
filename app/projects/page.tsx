"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-center md:text-left">
          Projects
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl">
          These projects have been designed and developed by me, in some cases
          using images or content fragments as reference, but always creating
          the layout, structure and, when necessary, also the backend from
          scratch.
        </p>
      </motion.div>

      <div className="space-y-24 md:space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Project Number */}
              <div className="flex-shrink-0">
                <motion.div
                  className="text-8xl md:text-9xl font-bold text-dark-border"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {String(project.id).padStart(2, "0")}
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="flex-1 space-y-6">
                {/* Project Image Placeholder */}
                <motion.div
                  className="w-full h-64 md:h-80 bg-dark-card rounded-lg border border-dark-border overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      {" "}
                      Image Coming soon...
                    </span>
                  </div>
                </motion.div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-400 mb-4">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-dark-card border border-dark-border rounded-full text-sm text-accent-primary">
                      {project.type}
                    </span>
                    <span className="px-3 py-1 bg-dark-card border border-dark-border rounded-full text-sm text-gray-400">
                      {project.highlight}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-dark-surface border border-dark-border rounded text-xs text-gray-500"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.frontendRepo && (
                      <Link
                        href={project.frontendRepo}
                        className="flex items-center gap-2 text-gray-400 hover:text-accent-primary transition-colors group"
                      >
                        <Code2
                          size={18}
                          className="group-hover:rotate-12 transition-transform"
                        />
                        <span className="text-sm">Frontend Repository</span>
                      </Link>
                    )}
                    {project.backendRepo && (
                      <Link
                        href={project.backendRepo}
                        className="flex items-center gap-2 text-gray-400 hover:text-accent-primary transition-colors group"
                      >
                        <Code2
                          size={18}
                          className="group-hover:rotate-12 transition-transform"
                        />
                        <span className="text-sm">Backend Repository</span>
                      </Link>
                    )}
                    {project.fullStackRepo && (
                      <Link
                        href={project.fullStackRepo}
                        className="flex items-center gap-2 text-gray-400 hover:text-accent-primary transition-colors group"
                      >
                        <Code2
                          size={18}
                          className="group-hover:rotate-12 transition-transform"
                        />
                        <span className="text-sm">Full Stack Repository</span>
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-gray-400 hover:text-accent-primary transition-colors group"
                      >
                        <ExternalLink
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                        <span className="text-sm">View Project</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            {index < projects.length - 1 && (
              <div className="mt-16 border-t border-dark-border" />
            )}
          </motion.div>
        ))}
      </div>
    </main>
  );
}
