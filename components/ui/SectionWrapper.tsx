"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const SectionWrapper = ({ children, id, className }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("w-full max-w-[1400px] w-[95%] sm:w-[90%] md:w-[85%] mx-auto py-16 md:py-24 px-4 sm:px-6 md:px-8", className)}
    >
      {children}
    </motion.section>
  );
};
