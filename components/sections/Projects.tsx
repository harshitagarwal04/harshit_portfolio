import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CommandBlock } from "@/components/ui/CommandBlock";
import { FolderGit2 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "LeafLens — Plant Disease Detection",
      description: [
        "CNN model built using ResNet50 framework.",
        "Trained on a robust dataset of 87k+ plant leaf images.",
        "Precision image classification for multi-class plant diseases.",
        "Interactive web interface built rapidly with Streamlit."
      ],
      features: ["image upload", "preprocessing pipeline", "real-time prediction"]
    },
    {
      title: "Uber Clone Application",
      description: [
        "React Native mobile application faithfully replicating ride-hailing core user flows.",
        "Real-time coordinate mapping and state synchronization."
      ],
      features: ["user authentication", "location tracking", "ride estimate APIs", "mobile UI workflows"]
    }
  ];

  return (
    <SectionWrapper id="projects">
      <CommandBlock command="cd ~/personal_projects && ls -al" />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative p-6 border border-gray-700 bg-gray-950/80 rounded-xl hover:border-gray-600 transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
              <FolderGit2 className="text-gray-400" size={24} />
            </div>
            
            <h3 className="text-xl font-bold text-gray-200 mb-4 pr-8">{project.title}</h3>
            
            <ul className="space-y-2 mb-6 text-base">
              {project.description.map((item, i) => (
                <li key={i} className="text-gray-200 flex gap-2">
                  <span className="text-gray-400">-</span> {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/50">
              {project.features.map((feature, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 text-xs font-mono text-gray-300 bg-gray-900 rounded-md border border-gray-700"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
