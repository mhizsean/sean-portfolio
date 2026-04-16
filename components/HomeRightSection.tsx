"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeRightSection() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-dark-surface via-dark-card to-dark-bg md:min-h-screen md:w-1/2">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/10 via-transparent to-accent-primary/5" />
      <div className="relative z-10 h-full flex items-center justify-center p-8 md:p-12 lg:p-16">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
        </motion.div>
      </div>
    </div>
  );
}
