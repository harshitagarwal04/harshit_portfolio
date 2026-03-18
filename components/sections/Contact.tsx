import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <CommandBlock command="./ping_me.sh" />
      
      <div className="mt-8 space-y-6">
        <p className="text-gray-200 max-w-4xl leading-relaxed text-lg">
          I'm currently looking for new opportunities to build scalable systems and AI-integrated products. 
          Whether you have a question, a project to discuss, or just want to say hi, feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link 
            href="mailto:hello@example.com" 
            className="flex items-center gap-3 px-6 py-3 bg-gray-100 text-black rounded-md font-medium hover:bg-white transition-colors w-fit"
          >
            <Mail size={18} />
            Send an Email
          </Link>
          
          <div className="flex gap-4">
            <Link 
              href="https://github.com" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 bg-gray-900 border border-gray-800 text-gray-200 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            >
              <Github size={18} />
              GitHub
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 bg-gray-900 border border-gray-800 text-gray-200 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
