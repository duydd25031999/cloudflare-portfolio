import React from 'react';
import Typography from '@/components/Typography';
import SectionLayout from '@/components/SectionLayout';
import {STACK_SKILLS} from "@/utils/component.config.js";

export default function StackSection() {
    return (
        <SectionLayout
            id="stack"
            title="Skills"
            subtitle="The skills, tools and technologies I am really good at:"
        >
            <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-6 mt-10 justify-center">
                {STACK_SKILLS.map((skill) => (
                    <li
                        key={skill.name}
                        className="flex flex-col items-center text-center gap-1"
                    >
                        <img src={skill.src} alt={skill.name} className="h-10 w-10" />
                        <Typography
                            tag="p"
                            className="text-sm text-gray-600 dark:text-gray-300"
                        >
                            {skill.name}
                        </Typography>
                    </li>
                ))}
            </ul>
        </SectionLayout>
    );
}
