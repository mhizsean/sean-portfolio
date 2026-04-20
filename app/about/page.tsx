"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-12 text-center md:text-left">
          About Me
        </h1>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          className="bg-dark-card border border-dark-border rounded-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-justify">
            Hi!!!!!!!!!!, <br />
            <br />
            If you&apos;re here. I&apos;m glad. You can call me Esther. I am a
            software engineer with 6+ years of experience building digital
            products. My work started frontend-heavy, but today I&apos;m focused
            on building full-stack products end-to-end, with a strong emphasis
            on user experience.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed  mb-6 text-justify">
            I don&apos;t see frontend as just UI, or backend as just logic, I
            see both as parts of the same product experience. I enjoy working
            across the stack to make sure what we build is not just functional,
            but intuitive, scalable, and genuinely useful.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-justify">
            Right now, I&apos;m intentionally growing into full-stack
            engineering, building stronger backend skills, understanding systems
            more deeply, and taking more ownership across the entire product
            lifecycle.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-justify">
            I&apos;m also actively upskilling in cloud engineering, focusing on
            AWS and how modern applications are deployed, scaled, and maintained
            in production environments. As I grow into full-stack work, I&apos;m
            intentionally deepening my understanding of infrastructure, backend
            services, and system design, so I can build not just features, but
            complete, reliable products.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-justify">
            Beyond building, I&apos;m also interested in writing and sharing
            what I learn. I believe great engineers don&apos;t just build, they
            communicate, teach, and contribute to the wider community. I&apos;m
            currently exploring writing more about engineering, product
            thinking, and lessons from real-world experience.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-justify">
            Ultimately, I&apos;m driven by impact, building products that solve
            real problems, improving how users experience technology, and
            continuously growing into a more well-rounded engineer.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I&apos;m always open to meaningful opportunities, collaborations,
            and conversations around building great products.
          </p>
        </motion.div>

        <motion.div
          className="bg-dark-card border border-dark-border rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ borderColor: "#d4af37" }}
        >
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold">
              Checkout my skills
            </h2>
            <p className="text-gray-400">
              See the technologies and tools I work with.
            </p>
          </div>
          <Link
            href="/skills"
            className="inline-flex items-center justify-center rounded-lg bg-accent-primary px-6 py-3 text-sm font-semibold text-dark-bg transition-colors hover:bg-accent-primary/90"
          >
            view my skills
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
