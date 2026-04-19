"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { writings } from "@/data/writings";
import { WritingCard } from "@/components/WritingCard";

const PAGE_SIZE = 5;

export default function WritingsPage() {
  const sorted = useMemo(
    () =>
      [...writings].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
    []
  );

  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(PAGE_SIZE, sorted.length)
  );

  const visible = sorted.slice(0, visibleCount);
  /** Only when there are more than 5 entries total, and hidden items remain */
  const showLoadMore =
    sorted.length > PAGE_SIZE && visibleCount < sorted.length;
  const remaining = sorted.length - visibleCount;

  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-center md:text-left">
          Writings
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Articles and posts I have published elsewhere. Each entry links to the
          original on the host platform. For now this list is maintained in
          code; later it can be fed by an API.
        </p>
      </motion.div>

      {sorted.length === 0 ? (
        <motion.p
          className="text-gray-500 text-center md:text-left py-12 border border-dashed border-dark-border rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          No articles yet. Add entries in{" "}
          <code className="text-accent-primary text-sm">data/writings.ts</code>.
        </motion.p>
      ) : (
        <>
          <ul className="space-y-6">
            {visible.map((item, index) => (
              <li key={item.id}>
                <WritingCard item={item} index={index} />
              </li>
            ))}
          </ul>
          {showLoadMore ? (
            <div className="mt-10 flex justify-center md:justify-start">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((c) =>
                    Math.min(c + PAGE_SIZE, sorted.length)
                  )
                }
                className="rounded-lg border border-dark-border px-6 py-3 text-sm font-medium uppercase tracking-wider text-accent-primary transition-colors hover:bg-dark-card hover:border-accent-primary/50"
              >
                Load more ({remaining} remaining)
              </button>
            </div>
          ) : null}
        </>
      )}
    </main>
  );
}
