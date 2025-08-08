import SectionLayout from './SectionLayout';
import ExperienceCard from './ExperienceCard';
import {EXPERIENCES_LIST} from "@/utils/component.config.js";
import ProjectDetailPopup from "@/components/ProjectDetailPopup.jsx";
import {useState} from "react";

export default function ExperienceSection() {
    const [selected, setSelected] = useState(null);

    return (
        <SectionLayout
            id="experience"
            title="Experience"
            subtitle="Here is a quick summary of my most recent experiences:"
        >
            <div className="flex flex-col items-center gap-6">
                {EXPERIENCES_LIST.map((exp) => (
                    <ExperienceCard
                        key={`${exp.company}-${exp.from}`}
                        onSelectProject={(p) => setSelected(p)}
                        {...exp}
                    />
                ))}
            </div>
            <ProjectDetailPopup project={selected} open={!!selected} onClose={() => setSelected(null)} />
        </SectionLayout>
    );
}
