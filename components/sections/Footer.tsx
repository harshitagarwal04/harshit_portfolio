import { Database } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 bg-black/50 backdrop-blur-sm mt-20">
      <div className="max-w-[1400px] w-[95%] sm:w-[90%] md:w-[85%] mx-auto px-4 sm:px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
          <Database size={14} className="text-green-500" />
          <span>status: all_systems_operational</span>
        </div>

        <div className="text-gray-400 text-sm">
          Built by <span className="text-gray-200 font-medium">Harshit Agarwal</span> &copy; {new Date().getFullYear()}
        </div>

      </div>
    </footer>
  );
};
