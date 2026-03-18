import { cn } from "@/lib/utils";

interface CommandBlockProps {
  command: string;
  className?: string;
}

export const CommandBlock = ({ command, className }: CommandBlockProps) => {
  return (
    <div className={cn("font-mono flex items-center gap-3 mb-6 text-green-400", className)}>
      <span className="opacity-50 select-none">&gt;</span>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{command}</h2>
      <span className="w-2 h-5 bg-green-400 animate-pulse block"></span>
    </div>
  );
};
