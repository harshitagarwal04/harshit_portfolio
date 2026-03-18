import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";

export const About = () => {
  return (
    <SectionWrapper id="about">
      <CommandBlock command="whoami" />
      
      <div className="space-y-6 text-gray-200 leading-relaxed md:text-lg max-w-4xl">
        <p>
          I am a backend-focused full stack engineer driven by a deep curiosity for how complex systems are built, scaled, and maintained. My engineering journey is centered around connecting the raw power of LLMs and AI with tangible, real-world infrastructure to solve concrete product problems.
        </p>
        
        <p>
          I specialize in architecting environments where reliability meets innovation. Rather than building isolated demos, I focus on integrating robust backend services, scalable databases, and intelligent workflows into cohesive production systems. 
        </p>

        <div className="pt-4">
          <p className="font-mono text-gray-300 mb-3 text-sm">Key areas of focus:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none font-mono text-sm">
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Voice AI pipelines
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Retrieval augmented systems (RAG)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Automation workflows
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Backend architectures
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Microservices & distributed systems
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};
