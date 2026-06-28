"use client";

import { motion } from "framer-motion";
import { Download, Eye, Github, Linkedin, Mail } from "lucide-react";
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
            Founding Software Engineer building AI-powered products
          </h2>
        </div>

        <p className="max-w-4xl text-gray-200 text-base md:text-lg leading-relaxed mt-8">
          I'm a backend-focused full stack engineer passionate about designing scalable systems that
          bridge AI with production infrastructure. I enjoy taking products from idea to deployment —
          building reliable backend services, integrating LLMs and voice AI, and creating automation
          that solves real business problems.
        </p>

        <div className="flex flex-wrap gap-4 pt-6">
          <div className="flex items-center bg-gray-100 text-black rounded-md font-medium overflow-hidden">
            <span className="pl-4 pr-3 py-2">Resume</span>
            <a
              href="/Harshit_agarwal.pdf"
              target="_blank"
              className="flex items-center px-3 py-2 border-l border-black/10 hover:bg-black/10 transition-colors"
              aria-label="View resume"
              title="View resume"
            >
              <Eye size={18} />
            </a>
            <a
              href="/Harshit_agarwal.pdf"
              download="Harshit_agarwal.pdf"
              className="flex items-center px-4 py-2 border-l border-black/10 hover:bg-black/10 transition-colors"
              aria-label="Download resume"
              title="Download resume"
            >
              <Download size={18} />
            </a>
          </div>
          <Link
            href="https://github.com/harshitagarwal04"
            target="_blank"
            className="flex items-center gap-2 p-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/harshit-713-agarwal/"
            target="_blank"
            className="flex items-center gap-2 p-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-md font-medium hover:bg-gray-800 hover:text-white transition-colors"
          >
            <Mail size={18} />
            Contact
          </Link>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
