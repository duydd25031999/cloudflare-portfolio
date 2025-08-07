import React from 'react';
import Typography from '@/components/Typography';
import SectionLayout from '@/components/SectionLayout';
import {STACK_SKILLS} from "@/utils/component.config.js";
import Image from "@/components/Image.jsx";

export default function StackSection() {
    return (
        <SectionLayout
            id="stack"
            title="Skills"
            subtitle="The skills, tools and technologies I am really good at:"
        >
            <ul className="flex flex-wrap justify-between gap-y-4 gap-x-4 md:gap-x-16">
                {STACK_SKILLS.map((skill) => (
                    <li
                        key={skill.name}
                        className="
                            flex flex-col justify-center items-center text-center
                            gap-2 w-24 md:w-28 bg-gray-100 dark:bg-graydark-300
                            rounded-2xl p-4
                            shadow-sm
                            transition-transform
                            hover:-translate-y-1
                            hover:shadow-xl
                            duration-200
                        "
                    >
                        <Image src={skill.src} alt={skill.name} original={true} />
                        <Typography
                            tag="p"
                            variant="body1"
                            className="text-gray-600 dark:text-graydark-600"
                        >
                            {skill.name}
                        </Typography>
                    </li>
                ))}
            </ul>
        </SectionLayout>
    );
}
