import SectionLayout from './SectionLayout';
import ExperienceCard from './ExperienceCard';
import {EXPERIENCES_LIST} from "@/utils/component.config.js";

export default function ExperienceSection() {
    return (
        <SectionLayout
            id="experience"
            title="Experience"
            subtitle="Here is a quick summary of my most recent experiences:"
        >
            <div className="flex flex-col items-center gap-6">
                {EXPERIENCES_LIST.map((exp, idx) => (
                    <ExperienceCard
                        key={idx}
                        img={exp.img}
                        from={exp.from}
                        to={exp.to}
                        title={exp.title}
                        description={exp.description}
                    />
                ))}
            </div>
        </SectionLayout>
    );
}
