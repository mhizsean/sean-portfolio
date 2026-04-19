"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Writing, WritingSource } from "@/data/writings";

function sourceLabel(source: WritingSource): string {
  switch (source) {
    case "devto":
      return "DEV";
    case "medium":
      return "Medium";
    default:
      return "Article";
  }
}

export type WritingCardProps = {
  item: Writing;
  /** Used for staggered entrance animation */
  index?: number;
};

export function WritingCard({ item, index = 0 }: WritingCardProps) {
  return (
    <motion.article
      className="bg-dark-card border border-dark-border rounded-lg p-6 md:p-8 transition-colors hover:border-accent-primary/50"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between gap-y-2">
        <div className="space-y-2 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
            <span className="rounded border border-dark-border px-2 py-0.5 text-accent-primary">
              {sourceLabel(item.source)}
            </span>
            <span>{item.publishedAt}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white pr-2">
            {item.title}
          </h2>
          {item.excerpt ? (
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {item.excerpt}
            </p>
          ) : null}
        </div>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-dark-border px-4 py-2.5 text-sm font-medium text-accent-primary transition-colors hover:bg-dark-surface hover:border-accent-primary/40"
        >
          Read
          <ExternalLink size={16} aria-hidden />
        </a>
      </div>
    </motion.article>
  );
}
