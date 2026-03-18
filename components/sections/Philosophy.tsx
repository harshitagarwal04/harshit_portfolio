import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export const Philosophy = () => {
  const principles = [
    "Build systems that solve real problems instead of fragile demo projects.",
    "Prefer simple architectures fundamentally before introducing complexity.",
    "Focus relentlessly on backend reliability, observability, and automation.",
    "Explore practical ways AI and emergent models can improve real-world workflows.",
    "Learn aggressively through building, breaking, and iterating on real systems."
  ];

  return (
    <SectionWrapper id="philosophy">
      <CommandBlock command="vim ~./engineering_philosophy.md" />
      
      <TerminalWindow title="engineering_mindset.txt" className="mt-8">
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-200">
            How I Think About Building Systems
          </h3>
          
          <div className="space-y-4 text-lg">
            {principles.map((principle, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-gray-500 select-none">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <p className="text-gray-200">
                  {principle}
                </p>
              </div>
            ))}
            
            <div className="flex gap-4 opacity-50">
              <span className="text-gray-500 select-none">
                {(principles.length + 1).toString().padStart(2, '0')}
              </span>
              <span className="w-2 h-5 bg-gray-500 animate-pulse block mt-0.5"></span>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </SectionWrapper>
  );
};
