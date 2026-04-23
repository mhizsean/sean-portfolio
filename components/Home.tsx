"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { socialLinks } from "@/constants/socialLinks";
import TypingText from "@/components/TypingText";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const stiffness = reduceMotion ? 280 : 42;
  const damping = reduceMotion ? 36 : 24;

  const springX = useSpring(mouseX, { stiffness, damping });
  const springY = useSpring(mouseY, { stiffness, damping });
  const lagX = useSpring(mouseX, {
    stiffness: stiffness * 0.35,
    damping: damping * 1.15,
  });
  const lagY = useSpring(mouseY, {
    stiffness: stiffness * 0.35,
    damping: damping * 1.15,
  });

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
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-dark-bg"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-secondary/10 via-transparent to-accent-primary/5" />
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

      <div className="relative z-10 flex min-h-screen flex-1 flex-col">
        <Link
          href="/contact"
          className="fixed left-6 top-6 z-50 inline-flex items-center justify-center rounded-full border border-accent-primary/30 bg-dark-bg/60 p-3 text-accent-primary backdrop-blur-md transition-colors hover:border-accent-primary/60 hover:bg-dark-card md:hidden"
          aria-label="Contact me"
        >
          <Mail size={20} />
        </Link>

        <motion.div
          className="absolute left-0 top-0 z-20 hidden flex-col gap-6 p-8 md:flex md:p-12 lg:p-16"
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
                target="_blank"
              >
                <Icon size={20} />
                <span className="text-sm uppercase tracking-wider">
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="flex flex-1 flex-col items-center justify-center px-8 py-24 text-center md:px-12 md:py-28 lg:px-16">
          <motion.div
            className="flex flex-col items-center space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto h-30 w-30 overflow-hidden rounded-full border-2 border-accent-primary/30 shadow-lg md:h-50 md:w-50">
              <Image
                src="/images/profile.jpg"
                alt="Esther Adeyi"
                className="object-cover object-center"
                width={200}
                height={200}
                priority
              />
            </div>

            <motion.div
              className="mx-auto max-w-md space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <motion.h1
                className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <TypingText
                  text="Esther Adeyi"
                  delayMs={450}
                  cps={18}
                  loop
                  loopDelayMs={5000}
                />
              </motion.h1>
              <motion.p
                className="text-lg text-gray-400 md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
              >
                <TypingText
                  text="Software Engineer 💅🏾"
                  delayMs={850}
                  cps={18}
                  loop
                  loopDelayMs={5000}
                />
              </motion.p>
              <motion.p
                className="text-base text-gray-100 md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                I build scalable, end-to-end products that deliver real user
                impact.
              </motion.p>

              <motion.div
                className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.5 }}
              >
                <Link
                  href="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-accent-primary px-6 py-3 text-sm font-semibold text-dark-bg transition-colors hover:bg-accent-primary/90"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-dark-border bg-transparent px-6 py-3 text-sm font-semibold text-gray-200 transition-colors hover:bg-dark-card hover:border-accent-primary/50"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
