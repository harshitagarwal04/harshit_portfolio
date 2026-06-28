import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export const Philosophy = () => {
  const principles = [
    "Solve business problems with practical AI.",
    "Design reliable backend systems.",
    "Favor automation over manual processes.",
    "Prefer simplicity before complexity.",
    "Learn continuously through building production software."
  ];

  return (
    <SectionWrapper id="philosophy">
      <CommandBlock command="cat ~/engineering_philosophy.md" />
      
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
          </div>
        </div>
      </TerminalWindow>
    </SectionWrapper>
  );
};
