"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Terminal } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const Hero = () => {
  return (
    <SectionWrapper className="min-h-[90vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <p className="font-mono text-green-400 text-sm md:text-base">
            print("Hello, World!")
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-100">
            Harshit Agarwal
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-mono">
            Full Stack Engineer building AI-powered systems
          </h2>
        </div>

        <p className="max-w-4xl text-gray-200 text-base md:text-lg leading-relaxed mt-8">
          I'm a Full Stack Engineer focused on building backend-heavy systems and AI-powered products. 
          I enjoy exploring how complex systems work and improving them through thoughtful engineering. 
          Recently, I've been working on voice AI pipelines, automation systems, and retrieval-augmented 
          applications that connect LLMs with real-world workflows.
        </p>

        <div className="flex flex-wrap gap-4 pt-6">
          <Link 
            href="#projects" 
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-black rounded-md font-medium hover:bg-white transition-colors"
          >
            <Terminal size={18} />
            View Projects
          </Link>
          <Link 
            href="/assets/resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            <Download size={18} />
            Resume
          </Link>
          <Link 
            href="https://github.com" 
            target="_blank"
            className="flex items-center gap-2 p-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
          <Link 
            href="https://linkedin.com" 
            target="_blank"
            className="flex items-center gap-2 p-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
