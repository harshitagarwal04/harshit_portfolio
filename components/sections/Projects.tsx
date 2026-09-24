import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";
import { FolderGit2, Lock } from "lucide-react";
import Link from "next/link";

export const Projects = () => {
  const projects: { title: string; repo?: string; isPrivate?: boolean; description: string[]; features: string[] }[] = [
    {
      title: "HuntLoop — AI-Powered Job Application Tracker",
      isPrivate: true,
      description: [
        "Full-stack job-application platform that tracks each application's status, resume version, emails, and follow-ups, with a 9-stage pipeline, a Kanban board, and an event timeline.",
        "LLM routing layer across multiple free-tier providers with automatic failover and rate-limit cooldowns, so a single provider's quota running out doesn't fail the request.",
        "Cover-letter generator that extracts structured data from job descriptions, picks the best-matching resume, and flags claims the resume doesn't support before the letter goes out.",
        "Gmail over OAuth to sync inbound email, match messages to applications, classify them with an LLM into user-approved status suggestions, and create follow-up drafts in the real inbox.",
        "Job discovery across job boards and company careers pages, using content hashing to skip LLM calls on unchanged pages, plus a Chrome extension that saves a posting in one click."
      ],
      features: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Gmail API", "LLMs"]
    }
  ];

  return (
    <SectionWrapper id="projects">
      <CommandBlock command="ls ./projects" />
      
      <div className="mt-8 grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative p-6 border border-gray-700 bg-gray-950/80 rounded-xl hover:border-gray-600 transition-colors duration-300"
          >
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                aria-label={`${project.title} repository`}
                className="absolute top-0 right-0 p-6 opacity-60 md:opacity-20 md:group-hover:opacity-100 transition-opacity"
              >
                <FolderGit2 className="text-gray-400" size={24} />
              </Link>
            )}
            {!project.repo && project.isPrivate && (
              <div
                className="absolute top-0 right-0 p-6 flex items-center gap-1.5 font-mono text-xs text-gray-400"
                title="Source is private while the project is under active development"
              >
                <Lock size={14} />
                private repo
              </div>
            )}
            
            <h3 className={`text-xl font-bold text-gray-200 mb-4 ${project.isPrivate && !project.repo ? "pr-32" : "pr-8"}`}>{project.title}</h3>
            
            <ul className="space-y-2 mb-6 text-base">
              {project.description.map((item, i) => (
                <li key={i} className="text-gray-200 flex gap-2">
                  <span className="text-gray-400">-</span> {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/50">
              {project.features.map((feature, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 text-xs font-mono text-gray-300 bg-gray-900 rounded-md border border-gray-700"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
