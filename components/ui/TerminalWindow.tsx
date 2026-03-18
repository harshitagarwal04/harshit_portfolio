import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export const TerminalWindow = ({ children, title = "terminal", className }: TerminalWindowProps) => {
  return (
    <div className={cn("w-full rounded-lg border border-gray-800 bg-gray-950/50 overflow-hidden backdrop-blur-sm", className)}>
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b border-gray-800 bg-gray-900/80">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          <div className="w-3 h-3 rounded-full bg-gray-700"></div>
        </div>
        <div className="text-xs md:text-sm font-mono text-gray-400 flex-1 text-center pr-12 select-none">
          {title}
        </div>
      </div>
      {/* Content */}
      <div className="p-4 md:p-6 text-sm md:text-base font-mono text-gray-200">
        {children}
      </div>
    </div>
  );
};
