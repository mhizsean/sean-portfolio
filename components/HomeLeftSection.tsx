"use client";

import { useLayoutEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { socialLinks } from "@/constants/socialLinks";

export default function HomeLeftSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const stiffness = reduceMotion ? 280 : 42;
  const damping = reduceMotion ? 36 : 24;

  const springX = useSpring(mouseX, { stiffness, damping });
  const springY = useSpring(mouseY, { stiffness, damping });
  const lagX = useSpring(mouseX, { stiffness: stiffness * 0.35, damping: damping * 1.15 });
  const lagY = useSpring(mouseY, { stiffness: stiffness * 0.35, damping: damping * 1.15 });

  const glowPrimary = useMotionTemplate`radial-gradient(520px circle at ${springX}px ${springY}px, rgba(212, 175, 55, 0.16) 0%, rgba(212, 175, 55, 0.05) 38%, transparent 68%)`;
  const glowSecondary = useMotionTemplate`radial-gradient(420px circle at ${lagX}px ${lagY}px, rgba(139, 115, 85, 0.2) 0%, transparent 55%)`;

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const setCenter = () => {
      const { width, height } = el.getBoundingClientRect();
      const cx = width / 2;
      const cy = height / 2;
      mouseX.set(cx);
      mouseY.set(cy);
    };
    setCenter();
    window.addEventListener("resize", setCenter);
    return () => window.removeEventListener("resize", setCenter);
  }, [mouseX, mouseY]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const el = sectionRef.current;
    if (!el) return;
    const { left, top } = el.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleLeave = () => {
    const el = sectionRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    mouseX.set(width / 2);
    mouseY.set(height / 2);
  };

  return (
    <div
      ref={sectionRef}
      className="relative flex h-full min-h-[50vh] w-full flex-col overflow-hidden border-r border-dark-border bg-dark-bg md:min-h-screen md:w-1/2"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{ background: glowSecondary }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 mix-blend-screen"
            style={{ background: glowPrimary }}
          />
        </>
      )}
      {reduceMotion && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(212,175,55,0.08),transparent_65%)]"
        />
      )}

      <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col justify-between p-8 md:p-12 lg:p-16">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-accent-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <Icon size={20} />
                <span className="text-sm uppercase tracking-wider">
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Esther Adeyi
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Software Engineer
          </motion.p>
          <motion.p
            className="max-w-md text-sm text-gray-500 md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            with over 6 years of experience building software solutions for
            various industries
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
