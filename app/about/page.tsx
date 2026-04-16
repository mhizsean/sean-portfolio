"use client";

import { motion } from "framer-motion";

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
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            I am a passionate frontend developer in training, dedicated to
            creating beautiful and functional web experiences. My journey in web
            development began with a deep curiosity about how digital interfaces
            come to life.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            here also
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: "Projects Completed", value: "3+" },
            { label: "Technologies", value: "10+" },
            { label: "Years Learning", value: "1+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-dark-card border border-dark-border rounded-lg p-6 text-center"
              whileHover={{ borderColor: "#d4af37", scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-bold text-accent-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
