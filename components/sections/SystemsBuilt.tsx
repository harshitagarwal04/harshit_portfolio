import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export const SystemsBuilt = () => {
  const systems = [
    {
      name: "Voice AI Calling Pipeline",
      features: ["automated outbound calling", "retry scheduling for unanswered calls", "lead qualification", "call analysis after completion", "admin dashboard monitoring"],
    },
    {
      name: "Vector Retrieval Infrastructure",
      features: ["PGVector based contextual search", "high-dimensional embedding storage", "fast nearest-neighbor similarity"],
    },
    {
      name: "Automation Workflows",
      features: ["n8n based internal automation pipelines", "cross-service event dispatching", "ETL data routing"],
    },
    {
      name: "Telephony Integrations Gateway",
      features: ["Twilio webhooks", "Exotel connection handling", "Tata Tele SIP trunking"],
    }
  ];

  return (
    <SectionWrapper id="systems">
      <CommandBlock command="ls ./systems_built" />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {systems.map((system, idx) => (
          <TerminalWindow key={idx} title={`sys_0${idx + 1}.config`}>
            <div className="space-y-3">
              <div className="font-bold text-gray-100 border-b border-gray-800 pb-2 mb-3">
                {system.name}
              </div>
              <ul className="space-y-2">
                {system.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-2 text-gray-300">
                    <span className="text-green-500">➜</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </TerminalWindow>
        ))}
      </div>
    </SectionWrapper>
  );
};
