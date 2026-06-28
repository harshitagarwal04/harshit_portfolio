import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "SQL", "CLI / Bash"]
    },
    {
      category: "Frontend",
      skills: ["Next.js", "React", "TailwindCSS", "Framer Motion"]
    },
    {
      category: "Backend",
      skills: ["FastAPI", "REST APIs", "SQLAlchemy", "Node.js"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redis", "PGVector"]
    },
    {
      category: "AI",
      skills: ["LLMs", "Voice AI (Pipecat)", "RAG", "Vector Search", "Prompt Engineering", "AI Integrations"]
    },
    {
      category: "Infrastructure",
      skills: ["Docker", "Google Cloud", "GitHub Actions", "Git", "Postman", "n8n"]
    }
  ];

  return (
    <SectionWrapper id="skills">
      <CommandBlock command="cat skills.json" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((group, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-gray-200 font-mono border-b border-gray-800 pb-2">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill, i) => (
                <li key={i} className="text-gray-200 font-mono text-base hover:text-green-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
