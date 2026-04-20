"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type TypingTextProps = {
  text: string;
  cps?: number;
  delayMs?: number;
  cursor?: boolean;
  loop?: boolean;
  loopDelayMs?: number;
};

export default function TypingText({
  text,
  cps = 18,
  delayMs = 0,
  cursor = true,
  loop = false,
  loopDelayMs = 5000,
}: TypingTextProps) {
  const reduceMotion = useReducedMotion();

  const intervalMs = useMemo(() => {
    if (cps <= 0) return 0;
    return Math.max(16, Math.round(1000 / cps));
  }, [cps]);

  const [visibleChars, setVisibleChars] = useState(
    reduceMotion ? text.length : 0,
  );

  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    const timers: Array<ReturnType<typeof setTimeout>> = [];

    const safeSet = (fn: () => void) => {
      if (!cancelled) fn();
    };

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => safeSet(fn), ms);
      timers.push(id);
      return id;
    };

    const runOnce = async (startDelay: number) => {
      safeSet(() => setVisibleChars(0));
      await new Promise<void>((resolve) => schedule(resolve, startDelay));

      const total = text.length;
      for (let i = 1; i <= total; i += 1) {
        safeSet(() => setVisibleChars(i));
        await new Promise<void>((resolve) => schedule(resolve, intervalMs));
      }
    };

    (async () => {
      await runOnce(delayMs);

      while (!cancelled && loop) {
        await new Promise<void>((resolve) => schedule(resolve, loopDelayMs));
        if (cancelled) return;
        await runOnce(0);
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach((id) => clearTimeout(id));
    };
  }, [delayMs, intervalMs, loop, loopDelayMs, reduceMotion, text]);

  const rendered = reduceMotion ? text : text.slice(0, visibleChars);

  return (
    <span aria-label={text}>
      <span aria-hidden>{rendered}</span>
      {cursor ? (
        <motion.span
          aria-hidden
          className="inline-block align-baseline ml-1 text-accent-primary"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          |
        </motion.span>
      ) : null}
    </span>
  );
}
