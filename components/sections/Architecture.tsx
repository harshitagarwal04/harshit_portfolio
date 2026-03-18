import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { MoveDown } from "lucide-react";

export const Architecture = () => {
  return (
    <SectionWrapper id="architecture">
      <CommandBlock command="docker-compose up --build architecture_map" />
      
      <TerminalWindow title="system_architecture_flow" className="mt-8 relative overflow-hidden">
        <div className="flex flex-col items-center justify-center py-10 space-y-2">
          
          <div className="border border-green-500/50 bg-green-500/10 text-green-400 px-6 py-3 rounded-md w-64 text-center font-bold font-mono shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            Lead Database
          </div>
          
          <MoveDown className="text-gray-600 animate-pulse" size={24} />
          
          <div className="border border-blue-500/50 bg-blue-500/10 text-blue-400 px-6 py-3 rounded-md w-64 text-center font-bold font-mono">
            Call Scheduler (Redis/Celery)
          </div>
          
          <MoveDown className="text-gray-600 animate-pulse" size={24} />
          
          <div className="border border-purple-500/50 bg-purple-500/10 text-purple-400 px-6 py-3 rounded-md w-64 text-center font-bold font-mono">
            Telephony (Twilio/Exotel)
          </div>
          
          <MoveDown className="text-gray-600 animate-pulse" size={24} />
          
          <div className="border border-orange-500/50 bg-orange-500/10 text-orange-400 px-6 py-3 rounded-md w-64 text-center font-bold font-mono">
            Voice AI Pipeline (Pipecat)
          </div>
          
          <MoveDown className="text-gray-600 animate-pulse" size={24} />
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-start pt-2">
            <div className="border border-gray-500/50 bg-gray-500/10 text-gray-300 px-6 py-3 rounded-md w-52 text-center font-bold font-mono text-sm">
              Call Processing <br/> & Analysis
            </div>
            <div className="hidden md:block w-8 border-t-2 border-dashed border-gray-700 mt-5"></div>
            <div className="border border-teal-500/50 bg-teal-500/10 text-teal-400 px-6 py-3 rounded-md w-52 text-center font-bold font-mono text-sm">
              Admin Dashboard <br/> (Next.js)
            </div>
          </div>

        </div>
      </TerminalWindow>
    </SectionWrapper>
  );
};
