import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";

export const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <CommandBlock command="cat experience.log" />
      
      <div className="mt-8 border-l border-gray-800 ml-4 pl-6 md:pl-8 space-y-12 relative">
        {/* Timeline dots */}
        <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[6.5px] top-1 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-200">
              Founding Engineer <span className="text-green-400">— Full Stack</span>
            </h3>
            <p className="font-mono text-sm text-gray-400 mt-1">
              ConversAI Labs | June 16, 2025 — Present
            </p>
          </div>

          <p className="text-gray-200 text-lg max-w-4xl">
            Working on an AI-driven B2B platform involving voice automation capabilities, robust vector retrieval systems, and complex backend service development from the ground up.
          </p>

          <div className="pt-4">
            <p className="font-mono text-sm text-gray-300 mb-4">sys.log_contributions():</p>
            <ul className="space-y-4 text-gray-200">
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Built frontend and backend product features using Next.js, Python, FastAPI, SQLAlchemy, and PostgreSQL.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Developed internal systems for complex Voice AI workflows using <strong>Pipecat</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Integrated major telephony providers including Twilio, Tata Tele, and Exotel into cohesive communication pipelines.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Architected and implemented fast vector search functionalities using <strong>PGVector</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Designed and launched extensive inter-service automation workflows utilizing <strong>n8n</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Managed microservices networking, inter-service communication, and scalability.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Containerized and deployed scalable services efficiently onto <strong>Google Cloud Run</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Configured automated CI/CD deployment pipelines using GitHub Actions.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
