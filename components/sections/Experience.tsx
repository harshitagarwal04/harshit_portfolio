import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";

export const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <CommandBlock command="cat work_experience.log" />
      
      <div className="mt-8 border-l border-gray-800 ml-4 pl-6 md:pl-8 space-y-12 relative">
        <div className="space-y-4 relative">
          <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[calc(1.5rem+6.5px)] md:-left-[calc(2rem+6.5px)] top-1 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-200">
              Founding Software Engineer
            </h3>
            <p className="font-mono text-sm text-gray-400 mt-1">
              Vaanii Global Technologies LLP | June, 2026 — Present
            </p>
          </div>

          <p className="text-gray-200 text-lg max-w-4xl">
            Building AI-powered customer engagement platforms with a strong focus on voice AI, automation, CRM systems, and production infrastructure.
          </p>

          <div className="pt-4">
            <p className="font-mono text-sm text-gray-300 mb-4">sys.log_contributions():</p>
            <ul className="space-y-4 text-gray-200">
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Own the end-to-end backend architecture for an AI-powered customer engagement platform, built independently from the ground up.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Built a new <strong>Voice AI backend</strong> integrating LLM, Speech-to-Text, and Text-to-Speech providers into a unified conversation pipeline.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Designed CRM and campaign-management features for uploading leads, tracking status, and running outbound voice campaigns.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Built automation and asynchronous processing pipelines using <strong>FastAPI</strong>, <strong>SQLAlchemy</strong>, and <strong>PostgreSQL</strong>, deployed on <strong>Google Cloud</strong>.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 relative">
          <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[calc(1.5rem+6.5px)] md:-left-[calc(2rem+6.5px)] top-1"></div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-200">
              Software Engineer <span className="text-green-400">— previously Full Stack Intern</span>
            </h3>
            <p className="font-mono text-sm text-gray-400 mt-1">
              Converse AI Labs | June, 2025 — June, 2026
            </p>
          </div>

          <p className="text-gray-200 text-lg max-w-4xl">
            Joined as a Full Stack Intern and was promoted to Software Engineer after two months. Worked across the complete product stack, contributing to backend services, frontend applications, AI integrations, and cloud deployments.
          </p>

          <div className="pt-4">
            <p className="font-mono text-sm text-gray-300 mb-4">sys.log_contributions():</p>
            <ul className="space-y-4 text-gray-200">
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Led development of the <strong>Pipecat-based Voice AI backend</strong>, designed to scale to <strong>900+ calls/hour</strong>; handled <strong>480+ calls/hour</strong> in production under telephony provider concurrency limits.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Built backend services with <strong>FastAPI</strong> and <strong>SQLAlchemy</strong>, and automated post-call workflows (WhatsApp messaging, form submission, CRM logging) end-to-end in n8n, removing manual lead processing.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Reduced conversation latency and mid-call drop-offs by optimizing turn-taking logic in production.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500 mt-0.5">~</span>
                <span>Built <strong>PGVector</strong>-based retrieval across 100+ transcripts to improve AI response accuracy.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
