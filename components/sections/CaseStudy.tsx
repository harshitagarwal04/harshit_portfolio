import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";

export const CaseStudy = () => {
  return (
    <SectionWrapper id="case-study">
      <CommandBlock command="cat case_study.md" />
      
      <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6 md:p-10 space-y-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-2">
            Building a Voice AI Calling System
          </h3>
          <p className="font-mono text-sm text-green-400">STATUS: DEPLOYED_TO_PRODUCTION</p>
        </div>

        <div className="space-y-4">
          <h4 className="font-mono text-gray-200 font-semibold border-b border-gray-800 pb-2">
            [01] The Problem
          </h4>
          <p className="text-gray-200 leading-relaxed text-lg">
            Companies face a massive hurdle qualifying leads through traditional phone calls. 
            Many users simply do not pick up the phone on the first attempt, which renders human 
            manual calling highly inefficient and expensive.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-mono text-gray-200 font-semibold border-b border-gray-800 pb-2">
            [02] The Solution
          </h4>
          <p className="text-gray-200 leading-relaxed mb-4 text-lg">
            Engineered an automated voice AI pipeline capable of seamless orchestration:
          </p>
          <ul className="list-disc pl-6 text-gray-200 space-y-2 text-lg">
            <li>Scheduling calls via intelligent queuing.</li>
            <li>Automatically retrying unanswered leads with progressive delays.</li>
            <li>Processing deep call outcomes and conversational context.</li>
            <li>Providing real-time management via an admin dashboard.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-mono text-gray-200 font-semibold border-b border-gray-800 pb-2">
            [03] Key Engineering Decisions
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-black/80 p-4 border border-gray-800 rounded-md">
              <span className="font-mono text-green-500 block mb-1">Orchestration</span>
              <span className="text-gray-300 text-sm">Adopted <strong>Pipecat</strong> for fluid voice AI flow management and low-latency response times.</span>
            </li>
            <li className="bg-black/80 p-4 border border-gray-800 rounded-md">
              <span className="font-mono text-green-500 block mb-1">Telephony</span>
              <span className="text-gray-300 text-sm">Constructed a unified API interface standardizing payloads across Twilio, Exotel, and Tata Tele.</span>
            </li>
            <li className="bg-black/80 p-4 border border-gray-800 rounded-md">
              <span className="font-mono text-green-500 block mb-1">Resiliency</span>
              <span className="text-gray-300 text-sm">Engineered retry scheduling cycles with exponential backoff.</span>
            </li>
            <li className="bg-black/80 p-4 border border-gray-800 rounded-md">
              <span className="font-mono text-green-500 block mb-1">State Management</span>
              <span className="text-gray-300 text-sm">Leveraged PostgreSQL for persistence + Redis for fast ephemeral job queueing.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 pt-4">
          <h4 className="font-mono text-gray-200 font-semibold border-b border-gray-800 pb-2">
            [04] The Outcome
          </h4>
          <p className="text-gray-200 leading-relaxed font-mono">
            SUCCESS: Unlocked a highly scalable automated lead qualification system capable of handling 
            thousands of repeated call attempts natively, filtering intent, and executing complex automated 
            conversation flows without human intervention.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
