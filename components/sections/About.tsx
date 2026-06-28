import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";

export const About = () => {
  return (
    <SectionWrapper id="about">
      <CommandBlock command="whoami" />
      
      <div className="space-y-6 text-gray-200 leading-relaxed md:text-lg max-w-4xl">
        <p>
          I am a backend-focused full stack engineer passionate about designing scalable systems that bridge AI with production infrastructure. My engineering journey is centered around taking products from idea to deployment — building reliable backend services, integrating LLMs and voice AI, and creating automation that solves real business problems.
        </p>

        <p>
          My primary interest lies in architecting production AI systems rather than building isolated prototypes — integrating robust backend services, scalable databases, and intelligent workflows into cohesive production systems.
        </p>

        <div className="pt-4">
          <p className="font-mono text-gray-300 mb-3 text-sm">Key areas of focus:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none font-mono text-sm">
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> AI product engineering
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Voice AI & conversational systems
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> LLM integrations
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Retrieval augmented generation (RAG)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Backend architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Distributed systems
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Automation platforms
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Cloud infrastructure
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};
